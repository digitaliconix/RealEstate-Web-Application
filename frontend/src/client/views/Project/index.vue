<template>
    <div>
        <b-card title="Projects">
            <b-row>
                <b-col cols="12">
                    <b-button
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        type="submit"
                        variant="primary"
                        align="right"
                        class="mr-1 mb-1"
                        :to="{name:'create-projects'}"
                    >
                        Create
                    </b-button>
                </b-col>
            </b-row>
            <panel ref="panel" :url-api="urlApi" :columns="columns" :resource="resource">
                <div slot="action" slot-scope="props" class="text-nowrap">
                    <feather-icon
                        :id="`project-row-${props.item.id}-edit-icon`"
                        icon="EditIcon"
                        class="cursor-pointer"
                        size="16"
                        @click="edit(props.item.id)"
                    />
                    <b-tooltip
                        :target="`project-row-${props.item.id}-edit-icon`"
                        title="Edit Project"
                        class="cursor-pointer"
                    />
                    <feather-icon
                        :id="`project-row-${props.item.id}-setup-icon`"
                        icon="SettingsIcon"
                        class="cursor-pointer"
                        size="16"
                        @click="projectSetup(props.item.id)"
                    />
                    <b-tooltip
                        :target="`project-row-${props.item.id}-setup-icon`"
                        title="Setup Project"
                        class="cursor-pointer"
                    />
                </div>
                <div slot="extra" slot-scope="props" class="text-nowrap">
                    <b-button
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        type="submit"
                        variant="primary"
                        align="right"
                        class="mr-1 mb-1"
                        :to="{name:'view-units', params : {id:props.item.id}}"
                    >
                        Show Units
                    </b-button>
                </div>
            </panel>
        </b-card>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {BCard, BRow, BCol, BCardText, BLink, BButton, BTooltip,BModal,VBModal,BFormGroup} from 'bootstrap-vue'
    import Panel from "@/components/Table/Panel";
    import ToastificationContent from "@core/components/toastification/ToastificationContent";
    import {get,post} from '@/libs/api.js'
    import Ripple from "vue-ripple-directive";
    import TagInput from "@/components/Form/TagInput";
    import {form} from "@/libs/mixins";

    export default {
        components: {
            BFormGroup,
            BModal,
            BCard,
            BCardText,
            BLink,
            BButton,
            BRow,
            BCol,
            BTooltip,
            Panel,
            TagInput
        },
        directives: {
            'b-modal': VBModal,
            Ripple
        },
        name: "Index",
        mixins:[form],
        data() {
            return {
                model: null,
                urlApi: "/api/projects",
                resource: "/projects",
                columns: [
                    {
                        label: 'Name',
                        field: 'title',
                    },
                    {
                        label: 'Type',
                        displayText: 'project_type',
                        field: 'title'
                    },
                    {
                        label: 'Country',
                        displayText: 'country',
                        field: 'title'
                    },
                    {
                        label: 'City',
                        displayText: 'city',
                        field: 'title'
                    },
                    {
                        label: 'Action',
                        field: 'action',
                        action: true
                    },
                    {
                        label: 'Units',
                        field: 'action',
                        extra: true
                    }

                ],
            }
        },
        methods: {
            handleOk(bvModalEvt) {
                // Prevent modal from closing
                bvModalEvt.preventDefault()
                // Trigger submit handler
                this.updateRoles()
            },
            edit(id){
                this.$router.push(`${this.resource}/${id}/edit`)
            },
            projectSetup(id){
                this.$router.push(`${this.resource}/setup/${id}`)
            },
            deleteUser(id){
                console.log(id)
            }
        },
    }
</script>

<style scoped>

</style>
