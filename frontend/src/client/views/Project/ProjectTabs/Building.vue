<template>
    <div>
        <b-row>
            <b-col cols="12">
                <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    type="submit"
                    variant="primary"
                    align="right"
                    class="mr-1 mb-1"
                    @click="createForm"
                >
                    Create
                </b-button>
            </b-col>
        </b-row>
        <panel ref="panel" :url-api="urlApi" :columns="columns" :additional-params="additionalParams">
            <div slot="action" slot-scope="props" class="text-nowrap">
                <feather-icon
                    :id="`building-row-${props.item.id}-edit-icon`"
                    icon="EditIcon"
                    class="cursor-pointer"
                    size="16"
                    @click="edit(props.item)"
                />
                <b-tooltip
                    :target="`building-row-${props.item.id}-edit-icon`"
                    title="Edit Building"
                    class="cursor-pointer"
                />
            </div>
        </panel>
        <b-modal
            v-model="formModal"
            id="modal-prevent-closing"
            :title="`${title} Building`"
            ok-title="Save"
            cancel-variant="outline-secondary"
            @hidden="resetModal"
            @ok="handleOk">
            <b-row>
                <b-col md="12">
                    <b-form-group
                        label="Title"
                        label-for="title"
                    >
                        <b-form-input
                            :id="`title`"
                            type="text"
                            placeholder="Title"
                            v-model="form.title"
                        />
                        <error :error="error.title"/>
                    </b-form-group>
                </b-col>
                <b-col md="12">
                    <b-form-group
                        label="Description"
                        label-for="description"
                    >
                        <b-form-textarea
                            :id="`description`"
                            type="text"
                            placeholder="Description"
                            v-model="form.description"
                        />
                        <error :error="error.description"/>
                    </b-form-group>
                </b-col>
            </b-row>
        </b-modal>
    </div>
</template>

<script>
    import {
        BForm, BFormGroup, BFormInput, BRow, BCol, BButton, VBModal, BModal,BTooltip, BFormTextarea
    } from 'bootstrap-vue'
    import { heightTransition } from '@core/mixins/ui/transition'
    import { form } from "@/libs/mixins";
    import { get } from "@/libs/api";
    import Ripple from 'vue-ripple-directive'
    import Vue from 'vue';
    import Error from "@/components/Form/Error";
    import Panel from "@/components/Table/Panel";

    export default {
        name: 'BuildingTab',
        components: {
            Panel,
            Error,
            BForm,
            BRow,
            BCol,
            BButton,
            BFormGroup,
            BFormInput,
            BModal,
            BTooltip,
            BFormTextarea
        },
        directives: {
            'b-modal': VBModal,
            Ripple
        },
        mixins: [heightTransition, form],
        data() {
            return {
                form : {
                  title: null,
                  project_id: this.$route.params.id
                },
                // show: false,
                store: `/api/buildings`,
                method: 'POST',
                selectedModel: null,
                message:'Project Buildings Added',
                title: 'Create',
                formModal: false,
                urlApi: "/api/buildings",
                additionalParams : {
                    project_id : this.$route.params.id
                },
                columns: [
                    {
                        label: 'Name',
                        field: 'title',
                    },
                    {
                        label: 'Action',
                        field: 'action',
                        action: true
                    }
                ],
            }
        },
        methods: {
            createForm(){
                this.title = 'Create';
                this.store = '/api/buildings';
                this.message = 'Project Buildings Added';
                Vue.set(this.$data,'formModal',true)
            },
            resetModal(){
                this.form = {
                    title: null,
                    description: null,
                    project_id: this.$route.params.id
                }
                Vue.set(this.$data,'selectedModel',null)
            },
            handleOk(bvModalEvt) {
                // Prevent modal from closing
                bvModalEvt.preventDefault()
                // Trigger submit handler
                this.formSubmitted()
            },
            edit(item){
                this.title = 'Edit';
                this.store = `/api/buildings/${item.id}?_method=PUT`;
                this.message = 'Project Buildings Updated';
                this.setForm(item)
                Vue.set(this.$data,'formModal',true)
            },
            formSubmitted() {
                this.submit(this.form, (res) => {
                    Vue.set(this.$data,'formModal',false)
                    this.success()
                    this.$refs.panel.reload();
                })
            },
            setForm(item){
                Vue.set(this.$data,'selectedModel',item)
                Vue.set(this.$data.form,'id',item.id)
                Vue.set(this.$data.form,'title',item.title)
                Vue.set(this.$data.form,'description',item.description)
            },
            deleteUser(id){
                console.log(`delete ${id}`)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>

