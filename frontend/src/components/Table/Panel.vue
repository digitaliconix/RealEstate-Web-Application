<template>
    <div>
        <b-row>
            <b-col cols="12">
                <vue-good-table
                    :isLoading="isLoading"
                    :columns="columns"
                    :rows="model.data"
                    :rtl="direction"
                    :pagination-options="{
                        enabled: true,
                        perPage:pageLength
                    }"
                    :sort-options="{
                        enabled: sortEnabled,
                    }"
                    theme="my-theme"
                    @on-row-click="onRowClick"
                >
                    <template
                        slot="table-row"
                        slot-scope="props"
                    >
                        <template v-if="props.column.action">
                            <slot name="action" :item="props.row"></slot>
                        </template>
                        <template v-if="props.column.extra">
                            <slot name="extra" :item="props.row"></slot>
                        </template>
                        <template v-else-if="props.column.displayText">
                            <template v-if="props.column.multiple">
                                <template v-if="props.row[props.column.displayText].length > 0">
                                    <b-badge variant="primary" class="mr-1"
                                             v-for="(item,index) in props.row[props.column.displayText]" :key="index">
                                        {{ item[props.column.field]}}
                                    </b-badge>
                                </template>
                                <template v-else>
                                    <span>No {{ props.column.displayText }}</span>
                                </template>
                            </template>
                            <template v-else>
                                <span v-if="props.row[props.column.displayText] != null">
                                    {{ props.row[props.column.displayText][props.column.field] }}
                                </span>
                                <span v-else>
                                    -
                                </span>
                            </template>
                        </template>
                        <template v-else-if="props.column.format">
                            <span v-if="props.column.format == 'formatDate'">
                                {{  props.row[props.column.field] | formatDate }}
                            </span>
                        </template>
                        <template v-else>
                            <span>
                                {{ props.column.relation ? props.column.relation : props.row[props.column.field] }}
                            </span>
                        </template>
                    </template>

                    <template
                        slot="pagination-bottom"
                        slot-scope="props"
                    >
                        <div class="d-flex justify-content-between flex-wrap">
                            <div class="d-flex align-items-center mb-0 mt-1">
                                <span class="text-nowrap">
                                  Showing 1 to
                                </span>
                                <b-form-select
                                    v-model="pageLength"
                                    :options="['25','50','100']"
                                    class="mx-1"
                                    @input="(value)=>props.perPageChanged({currentPerPage:value})"
                                />
                                <span class="text-nowrap"> of {{ props.total }} entries </span>
                            </div>
                            <div class="align-content-end mb-0 mt-1">
                                <b-button
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                                    type="submit"
                                    variant="primary"
                                    class="mr-1"
                                    :disabled="model.prev_page_url == null ? true : false"
                                    @click="prevPage"
                                >
                                    <feather-icon
                                        icon="ChevronLeftIcon"
                                        size="18"
                                    />
                                </b-button>
                                <b-button
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                                    type="submit"
                                    variant="primary"
                                    class="mr-1"
                                    :disabled="model.next_page_url == null ? true : false"
                                    @click="nextPage"
                                >
                                    <feather-icon
                                        icon="ChevronRightIcon"
                                        size="18"
                                    />
                                </b-button>
                            </div>
                        </div>
                    </template>
                </vue-good-table>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {BRow, BCol, BAvatar, BBadge, BPagination, BFormGroup, BFormInput, BFormSelect, BButton} from 'bootstrap-vue'
    import {VueGoodTable} from 'vue-good-table'
    import {get} from "@/libs/api"
    import store from '@/store/index'
    import Ripple from 'vue-ripple-directive'
    import ToastificationContent from "@core/components/toastification/ToastificationContent";

    export default {
        name: "Panel",
        components: {
            BRow,
            BCol,
            BAvatar,
            BBadge,
            BPagination,
            BFormGroup,
            BFormInput,
            BFormSelect,
            BButton,
            VueGoodTable,
            ToastificationContent
        },
        directives: {
            Ripple
        },
        props: {
            additionalParams : {
                type: Object,
                default:{
                    q: ""
                }
            },
            urlApi: {
                type: String,
                required: true
            },
            columns: {
                type: Array,
                required: true,
            },
            initialGet: {
                type: Boolean,
                default: true
            },
            resource: {
                type: String
            },
            sortEnabled: {
                type: Boolean
            }

        },
        computed: {
            direction() {
                if (store.state.appConfig.isRTL) {
                    this.dir = true
                    return this.dir
                }
                this.dir = false
                return this.dir
            },
        },
        data() {
            return {
                pageLength: 5,
                dir: false,
                model: {},
                isLoading: true,
            }
        },
        created() {
            if (this.initialGet) {
                this.reload()
            }
        },
        methods: {
            reload(){
                get(this.urlApi, this.additionalParams).then(res => {
                    this.model = res.data.data;
                    this.pageLength = res.data.data.per_page
                    this.isLoading = false
                });
            },
            onRowClick(params) {
                this.$emit('rowClicked', params.row);
            },
            nextPage() {
                get(this.model.next_page_url).then((res) => {
                    Vue.set(this.$data, 'model', res.data.data)
                    this.pageLength = res.data.data.per_page
                })
            },
            prevPage() {
                get(this.model.prev_page_url).then((res) => {
                    Vue.set(this.$data, 'model', res.data.data)
                    this.pageLength = res.data.data.per_page
                })
            }
        },
    }
</script>

<style scoped>

</style>
