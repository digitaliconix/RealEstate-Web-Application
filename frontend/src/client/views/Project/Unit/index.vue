<template>
    <div>
        <b-card :title="`${project ? project.title : ''} Units`">
            <b-row>
                <b-col cols="12">
                    <b-button
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        type="submit"
                        variant="primary"
                        align="right"
                        class="mr-1 mb-1"
                        :to="{name:'view-projects'}"
                    >
                        Go Back
                    </b-button>
                    <b-button
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        type="submit"
                        variant="primary"
                        align="right"
                        class="mr-1 mb-1"
                        :to="{name:'create-units'}"
                    >
                        Create
                    </b-button>
                </b-col>
            </b-row>
            <panel ref="panel" :url-api="urlApi" :columns="columns" :resource="resource">
                <div slot="action" slot-scope="props" class="text-nowrap">
                    <feather-icon
                        :id="`unit-row-${props.item.id}-edit-icon`"
                        icon="EditIcon"
                        class="cursor-pointer"
                        size="16"
                        @click="edit(props.item.id)"
                    />
                    <b-tooltip
                        :target="`unit-row-${props.item.id}-edit-icon`"
                        title="Edit Unit"
                        class="cursor-pointer"
                    />
                </div>
            </panel>
        </b-card>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {BCard, BRow, BCol, BCardText, BLink, BButton, BTooltip,BModal,VBModal,BFormGroup} from 'bootstrap-vue'
    import Panel from "@/components/Table/Panel";
    import {get} from '@/libs/api.js'
    import Ripple from "vue-ripple-directive";
    import TagInput from "@/components/Form/TagInput";

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
        created() {
            get(`/api/projects/${this.$route.params.id}`).then(res => {
                Vue.set(this.$data,'project', res.data.model);
            });
        },
        data() {
            return {
                project : null,
                model: null,
                urlApi: `/api/project/${this.$route.params.id}/units`,
                resource: `/projects/${this.$route.params.id}/units`,
                columns: [
                    {
                        label: 'Unit Number',
                        field: 'number',
                    },
                    {
                        label: 'Building',
                        field: 'title',
                        displayText: 'building'
                    },
                    {
                        label: 'Unit Type',
                        field: 'title',
                        displayText: 'unit_type'
                    },
                    {
                        label: 'Area',
                        field: 'area'
                    },
                    {
                        label: 'Measurement Type',
                        field: 'title',
                        displayText: 'measurement_type'
                    },
                    {
                        label: 'Net Price',
                        field: 'total'
                    },
                    {
                        label: 'Unit Category',
                        field: 'title',
                        displayText: 'unit_category'
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
