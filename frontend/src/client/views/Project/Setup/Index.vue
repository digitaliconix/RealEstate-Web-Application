<template>
    <div>
        <b-card :title="`${project ? project.title : ''} ( ${$route.meta.breadcrumb[0].text} )`">
            <b-tabs @input="changeTab" ref="tab">
                <b-tab title="Building/Blocks">
                    <template v-if="tab[0].show">
                        <building-tab></building-tab>
                    </template>
                </b-tab>
                <b-tab title="Unit Types">
                    <template v-if="tab[1].show">
                        <unit-type-tab></unit-type-tab>
                    </template>
                </b-tab>
                <b-tab title="Charge Types">
                    <template v-if="tab[2].show">
                        <extra-charge-type-tab></extra-charge-type-tab>
                    </template>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
    import {BCard, BCardText, BRow, BCol, BButton, BTabs, BTab} from 'bootstrap-vue'
    import BuildingTab from "@/client/views/Project/ProjectTabs/Building";
    import ExtraChargeTypeTab from "@/client/views/Project/ProjectTabs/ExtraChargeType";
    import UnitTypeTab from "@/client/views/Project/ProjectTabs/UnitType";
    import Vue from 'vue';
    import { get } from '@/libs/api';

    export default {
        components: {
            UnitTypeTab,
            ExtraChargeTypeTab,
            BuildingTab,
            BTabs,
            BTab,
            BCard,
            BCardText,
            BRow,
            BCol,
            BButton
        },
        data() {
            return {
                project : null,
                show: false,
                tab: [
                    {
                        show: true
                    },
                    {
                        show: false
                    },
                    {
                        show: false
                    }
                ]
            }
        },
        created() {
            get(`/api/projects/${this.$route.params.id}`).then(res => {
                Vue.set(this.$data,'project', res.data.model);
            });
        },
        methods: {
            changeTab(e) {
                for (let i = 0; i < this.tab.length; i++) {
                    this.tab[i].show = false
                }
                this.tab[e].show = true
            }
        },
    }
</script>

<style scoped>

</style>
