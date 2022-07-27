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
                    :id="`extra-charge-row-${props.item.id}-edit-icon`"
                    icon="EditIcon"
                    class="cursor-pointer"
                    size="16"
                    @click="edit(props.item)"
                />
                <b-tooltip
                    :target="`extra-charge-row-${props.item.id}-edit-icon`"
                    title="Edit Charge Type"
                    class="cursor-pointer"
                />
            </div>
        </panel>
        <b-modal
            v-model="formModal"
            id="modal-prevent-closing"
            :title="`${title} Charge Type`"
            ok-title="Save"
            cancel-variant="outline-secondary"
            @hidden="resetModal"
            @ok="handleOk">
            <b-row>
                <b-col md="6">
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
                <b-col md="6">
                    <b-form-group
                        label="Charge Type"
                        label-for="mc-charge-type-id"
                    >
                        <x-tag-input resource="/api/search/charge_types"
                                     :value="form.charge_type" @input="onChargeTypeUpdate"
                                     column="title" name="title"
                        >
                        </x-tag-input>
                        <error :error="error.measurement_type_id"/>
                    </b-form-group>
                </b-col>
                <b-col md="12">
                    <b-form-group
                        label="Price"
                        label-for="price"
                    >
                        <b-form-input
                            :id="`price`"
                            type="text"
                            placeholder="Price"
                            v-model="form.price"
                        />
                        <error :error="error.price"/>
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
    import XTagInput from "@/components/Form/TagInput";

    export default {
        name: 'ExtraChargeTypeTab',
        components: {
            XTagInput,
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
                    charge_type: null,
                    charge_type_id: null,
                    project_id: this.$route.params.id
                },
                // show: false,
                store: `/api/project_charge_types`,
                method: 'POST',
                selectedModel: null,
                message:'Project Charge Added',
                title: 'Create',
                formModal: false,
                urlApi: "/api/project_charge_types",
                additionalParams : {
                    project_id : this.$route.params.id
                },
                columns: [
                    {
                        label: 'Name',
                        field: 'title',
                    },
                    {
                        label: 'Charge Type',
                        field: 'title',
                        displayText: 'charge_type'
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
                this.store = '/api/project_charge_types';
                this.message = 'Project Charge Added';
                Vue.set(this.$data,'formModal',true)
            },
            resetModal(){
                this.form = {
                    title: null,
                    charge_type: null,
                    charge_type_id: null,
                    price: null,
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
                this.store = `/api/project_charge_types/${item.id}?_method=PUT`;
                this.message = 'Project Charge Updated';
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
                Vue.set(this.$data.form,'charge_type',item.charge_type)
                Vue.set(this.$data.form,'charge_type_id',item.charge_type_id)
                Vue.set(this.$data.form,'price',item.price)
                Vue.set(this.$data.form,'description',item.description)
            },
            onChargeTypeUpdate(e){
                Vue.set(this.$data.form,'charge_type', e);
                Vue.set(this.$data.form,'charge_type_id', e.id);
            },
            deleteUser(id){
                console.log(`delete ${id}`)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>

