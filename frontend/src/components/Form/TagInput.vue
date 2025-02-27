<template>
    <div class="select-form">
        <div class="select-input" :tabindex="disabled ? -1 : tabindex" ref="toggle" :disabled="disabled"
             @click="toggle" @keydown.down.prevent="onKeydownMain">
            <div class="select-text" v-if="multiple">
                <div class="select-tags mb-1" v-if="value && value.length">
                    <div class="tag tag-primary" v-for="(x, i) in value">
                        <span class="tag-text">
                          {{relation === '' ?  x[name] : x[relation][name]}}
                        </span>
                        <feather-icon icon="XIcon" size="12" @mousedown.prevent="remove(x, i)"/>
                    </div>
                </div>
                <!--        <div v-else>{{$t('type_or_select')}}</div>-->
            </div>
            <div class="select-text" v-else>
                {{value && value[name] ? value[name] : 'Select'}}
            </div>
            <span v-if="removable && value && value.id" class="select-remove icon icon-trash-a" @click="removeVal"></span>
            <span v-else :class="[`select-icon icon icon-arrow-${showDropdown ? 'up-b' : 'down-b'}`]"></span>
        </div>
        <div class="select-dropdown" v-if="showDropdown" :style="positionRelative === true ? 'position:relative' : ''">
            <div class="select-inner">
                <div class="select-search-wrap">
                    <input type="text" ref="search" class="select-search" placeholder="Search..."
                           @keydown.down.prevent="onDownKey" @keydown.enter="onEnter"
                           @keydown.up.prevent="onUpKey" @keydown.esc="onBlur"
                           @input="onSearch" @blur="onBlur">
                </div>
                <div class="select-items" ref="items">
                    <div :class="['select-item', selectIndex === i ? 'select-active':'']"
                         @mouseover.prevent="onMouse(i)"
                         @mousedown.prevent="select(option)"
                         v-for="(option, i) in availableOptions">
                        <span>{{option[name]}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {debounce} from 'lodash'
    import { get } from '@/libs/api'
    import ToastificationContent from "@core/components/toastification/ToastificationContent";
    export default {
        name: 'XTagInput',
        model: {
            prop: 'value',
            event: 'input'
        },
        props: {
            resource: String,
            column: String,
            tabindex: {
                default: 0
            },
            positionRelative:{
                type:Boolean,
                default: false
            },
            value: [Object, Array],
            disabled: {
                default: false,
                type: Boolean
            },
            multiple: {
                default: false,
                type: Boolean
            },
            removable: {
                default: false,
                type: Boolean
            },
            name: {
                default: 'value'
            },
            keyIndex: String,
            relation: {type:String,default:''},
            params: {
                type: [Object, Array],
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                isLoading: false,
                showDropdown: false,
                selectIndex: -1,
                search: '',
                options: []
            }
        },
        computed: {
            availableOptions() {
                return this.options
            }
        },
        methods: {
            removeVal() {
                const payload = {
                    id: null
                }
                this.$emit('input', payload)
            },
            remove(x, i) {
                const payload = this.value
                payload.splice(i, 1)
                this.$emit('input', payload)
            },
            onSearch(e) {
                this.search = event.target.value
                // xhr
                this.fetch(this.search)
            },
            fetch: debounce(function(q) {
                this.isLoading = true
                const params = {
                    q: q,
                    column: this.column,
                };
                get(`${this.resource}`, params).then((res) => {
                    if (res.data) {
                        this.$set(this.$data, 'options', res.data.data)
                    }
                    this.isLoading = false
                })
            }, 300),
            onUpKey(e) {
                if(this.disabled) return
                if (this.selectIndex > 0) {
                    this.selectIndex--
                    if(this.selectIndex > 4) {
                        this.$nextTick(() => {
                            // todo: algo to find best scroll position
                            this.$refs.items.scrollTop -= 28
                        })
                    }
                } else {
                    this.selectIndex = this.options.length - 1
                    this.$nextTick(() => {
                        this.$refs.items.scrollTop = this.selectIndex * 28
                    })
                }
            },
            onDownKey(e) {
                if(this.disabled) return
                if(!this.showDropdown) {
                    this.open()
                }
                if (this.options.length - 1 > this.selectIndex) {
                    this.selectIndex++
                    if(this.selectIndex > 4) {
                        this.$nextTick(() => {
                            this.$refs.items.scrollTop += 28
                        })
                    }
                } else {
                    this.selectIndex = 0
                    this.$nextTick(() => {
                        this.$refs.items.scrollTop = 0
                    })
                }

            },
            onKeydownMain(e) {
                this.open()
            },
            select(option) {
                if(this.multiple) {
                    // console.log(option);
                    const payload = this.value
                    if(this.value.length === 0){
                        const temp = {};
                        if (this.relation == ''){
                            payload.push(option)
                        }else {

                            temp[`${this.keyIndex}`] = option.id;
                            temp[`${this.relation}`] = option;
                            payload.push(temp)
                        }
                        this.$emit('input', payload)
                    } else {
                        var error = false;
                        for(var i = 0; i < payload.length; i++){
                            if(option.id === payload[i][this.keyIndex]){
                                this.$toast({
                                    component: ToastificationContent,
                                    props: {
                                        title: 'Alert',
                                        icon: 'BellIcon',
                                        text: 'Option already selected above',
                                        variant:'danger'
                                    },
                                })
                                error = true;
                            }
                        }
                        if(!error){
                            const temp = {};
                            if (this.relation == ''){
                                payload.push(option)
                            }else {

                                temp[`${this.keyIndex}`] = option.id;
                                temp[`${this.relation}`] = option;
                                payload.push(temp)
                            }
                            this.$emit('input', payload)
                        }else{
                            return;
                        }
                    }
                } else {
                    this.$emit('input', option)
                }
                this.close()
            },
            onEnter() {
                if(this.disabled) return
                if(this.selectIndex < 0) return
                const option = this.options[this.selectIndex]
                this.select(option)
            },
            onBlur() {
                this.close()
            },
            onMouse(index) {
                this.selectIndex = index
            },
            close() {
                this.showDropdown = false
                this.selectIndex = -1
                this.search = ''
                this.options = []
            },
            open() {
                this.showDropdown = true
                this.$nextTick(() => {
                    // cannot used key from parent due to macrotask in vue,
                    // will be microtask in 2.6
                    this.$refs.search.focus()
                    if(!this.options.length) {
                        this.fetch()
                    }
                })
            },
            toggle() {
                if(this.disabled) return
                if(this.showDropdown) {
                    this.close()
                } else {
                    this.open()
                }
            },
        }
    }
</script>
