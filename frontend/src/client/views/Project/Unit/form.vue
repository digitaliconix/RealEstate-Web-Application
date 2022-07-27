<template>
    <div v-if="show">
        <b-card :title="`${title} Unit`">
            <b-row>
                <b-col md="6">
                    <b-form-group
                        label="Number"
                        label-for="mc-title"
                    >
                        <b-form-input
                            id="mc-title"
                            placeholder="Number"
                            v-model="form.number"
                        />
                        <error :error="error.number"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Building"
                        label-for="mc-building-id"
                    >
                        <x-tag-input :resource="`/api/search/buildings?project_id=${form.project_id}`"
                                     :value="form.building" @input="onBuildingUpdate"
                                     column="title" name="title"
                        >
                        </x-tag-input>
                        <error :error="error.building_id"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Unit Type"
                        label-for="mc-unit-type-id"
                    >
                        <x-tag-input :resource="`/api/search/unit_types?project_id=${form.project_id}`"
                                     :value="form.unit_type" @input="onUnitTypeUpdate"
                                     column="title" name="title"
                        >
                        </x-tag-input>
                        <error :error="error.unit_type_id"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Area"
                        label-for="mc-area"
                    >
                        <b-form-input
                            type="number"
                            id="mc-area"
                            placeholder="Area"
                            v-model="form.area"
                        />
                        <error :error="error.area"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Measurement Type"
                        label-for="mc-measurement-type-id"
                    >
                        <x-tag-input :resource="`/api/search/measurement_types`"
                                     :value="form.measurement_type" @input="onMeasurementTypeUpdate"
                                     column="title" name="title"
                        >
                        </x-tag-input>
                        <error :error="error.measurement_type_id"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Net Price"
                        label-for="mc-price"
                    >
                        <b-form-input
                            type="number"
                            id="mc-price"
                            placeholder="Net Price"
                            v-model="form.unit_price"
                        />
                        <error :error="error.unit_price"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Unit Category"
                        label-for="mc-unit-category-id"
                    >
                        <x-tag-input :resource="`/api/search/unit_categories`"
                                     :value="form.unit_category" @input="onUnitCategoryUpdate"
                                     column="title" name="title"
                        >
                        </x-tag-input>
                        <error :error="error.unit_category_id"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Image"
                        label-for="mc-unit-image"
                    >
                        <b-form-file
                            id="mc-unit-image"
                            v-model="form.unit_image"
                            placeholder="Choose a file or drop it here..."
                            drop-placeholder="Drop file here..."
                            accept=".jpg, .jpeg, .png"
                        />
                        <error :error="error.unit_image"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" class="mb-2">
                    <template v-if="form.image && form.image != null">
                        <b-container fluid class="p-1 bg-dark">
                            <b-row>
                                <b-col md="12" class="p-1">
                                    <b-img thumbnail fluid :src="`/api/attachment/project_${form.project_id}/units/${form.image}`"  />
                                </b-col>
                            </b-row>
                        </b-container>
                    </template>
                </b-col>
            </b-row>
            <hr>
            <b-row>
                <b-col md="6">
                    <h3>Standard Charges</h3>
                </b-col>
            </b-row>
            <b-row v-for="(item,index) in form.standard_charges" :key="index">
                <b-col md="5">
                    <b-form-group
                        label="Charge Type"
                        label-for="mc-charge-type-id"
                    >
                        <x-tag-input :resource="`/api/search/project_charge_types?project_id=${form.project_id}&charge_type=1`"
                                     :value="item.project_charge_type"
                                     @input="onProjectChargeTypeUpdate($event, index, 'standard_charges')"
                                     column="title" name="title"
                        >
                        </x-tag-input>
                        <error :error="error[`standard_charges.${index}.project_charge_type_id`]"/>
                    </b-form-group>
                </b-col>
                <b-col md="5">
                    <b-form-group
                        label="Price"
                        :label-for="`mc-price-${index}`"
                    >
                        <b-form-input
                            type="number"
                            :id="`mc-price-${index}`"
                            placeholder="Price"
                            v-model="item.price"
                        />
                        <error :error="error[`standard_charges.${index}.price`]"/>
                    </b-form-group>
                </b-col>
                <b-col
                    md="2"
                    class="mb-50"
                >
                    <b-button
                        v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                        variant="outline-danger"
                        class="mt-0 mt-md-2"
                        @click="removeItem(index,'standard_charges')"
                    >
                        <feather-icon
                            icon="XIcon"
                            class="mr-25"
                        />
                    </b-button>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6">
                    <b-button
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        type="submit"
                        variant="primary"
                        class="my-2"
                        @click="addCharges"
                    >
                        Add Charges
                    </b-button>
                </b-col>
            </b-row>
            <template v-if="form.extra_charges.length > 0">
                <hr>
                <b-row>
                    <b-col md="6">
                        <h3>Extra Charges</h3>
                    </b-col>
                </b-row>
                <b-row v-for="(item,index) in form.extra_charges" :key="index">
                    <b-col md="5">
                        <b-form-group
                            label="Charge Type"
                            label-for="mc-charge-type-id"
                        >
                            <x-tag-input :resource="`/api/search/project_charge_types?project_id=${form.project_id}&charge_type=2`"
                                         :value="item.project_charge_type"
                                         @input="onProjectChargeTypeUpdate($event, index,'extra_charges')"
                                         column="title" name="title"
                            >
                            </x-tag-input>
                            <error :error="error[`extra_charges.${index}.project_charge_type_id`]"/>
                        </b-form-group>
                    </b-col>
                    <b-col md="5">
                        <b-form-group
                            label="Price"
                            :label-for="`mc-price-${index}`"
                        >
                            <b-form-input
                                type="number"
                                :id="`mc-price-${index}`"
                                placeholder="Price"
                                v-model="item.price"
                            />
                            <error :error="error[`extra_charges.${index}.price`]"/>
                        </b-form-group>
                    </b-col>
                    <b-col
                        md="2"
                        class="mb-50"
                    >
                        <b-button
                            v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                            variant="outline-danger"
                            class="mt-0 mt-md-2"
                            @click="removeItem(index,'extra_charges')"
                        >
                            <feather-icon
                                icon="XIcon"
                                class="mr-25"
                            />
                        </b-button>
                    </b-col>
                </b-row>
            </template>
            <b-row>
                <b-col>
                    <b-button
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        type="submit"
                        variant="primary"
                        class="mr-1"
                        @click="formSubmitted"
                    >
                        Submit
                    </b-button>
                    <b-button
                        v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                        type="reset"
                        variant="outline-secondary"
                        :to="{path: resource}"
                    >
                        Cancel
                    </b-button>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {
        BCard,
        BCardText,
        BLink,
        BRow,
        BCol,
        BFormInput,
        BFormGroup,
        BFormCheckboxGroup,
        BButton,
        BFormFile,
        BImg,
        BContainer,
        BFormTextarea
    } from 'bootstrap-vue'
    import {form} from "@/libs/mixins";
    import {get} from '@/libs/api'
    import Error from "@/components/Form/Error";
    import Ripple from "vue-ripple-directive";
    import XTagInput from "@/components/Form/TagInput";
    import ToastificationContent from "@core/components/toastification/ToastificationContent";

    function initialize(to) {
        let urls = {
            'add': `/api/project/${to.params.id}/units/create`,
            'edit': `/api/project/units/${to.params.id}/edit`
        };
        return (urls[to.meta.mode] || urls['add'])
    }

    export default {
        mixins: [form],
        components: {
            XTagInput,
            Error,
            BCard,
            BCardText,
            BLink,
            BRow,
            BCol,
            BFormInput,
            BFormGroup,
            BFormFile,
            BImg,
            BContainer,
            BFormCheckboxGroup,
            BFormTextarea,
            BButton
        },
        directives: {
            Ripple
        },
        data() {
            return {
                show: false,
                resource: `/projects/${this.$route.params.id}/units`,
                store: '/api/units',
                method: 'POST',
                title: 'Add',
                message: 'New Unit Added',
                permissions: [],
            }
        },
        beforeRouteEnter(to, from, next) {
            get(initialize(to))
                .then((res) => {
                    next(vm => vm.setData(res))
                })
        },
        beforeRouteUpdate(to, from, next) {
            get(initialize(to))
                .then((res) => {
                    this.setData(res);
                    next()
                })
        },
        methods: {
            setData(res) {
                Vue.set(this.$data, 'form', res.data.form);
                if (this.$route.meta.mode === 'edit') {
                    this.store = `/api/units/${this.$route.params.id}?_method=PUT`;
                    this.title = 'Edit';
                    this.resource = `/projects/${this.$route.params.project}/units`
                    this.message = 'Unit has been updated';
                }

                this.show = true
            },
            formSubmitted() {
                this.submitMultipartForm(this.form, (res) => {
                    this.success()
                    this.successfull(res)
                })
            },
            successfull(res) {
                this.$router.push(`${this.resource}`)
            },
            onProjectUpdate(e) {
                Vue.set(this.$data.form, 'project', e);
                Vue.set(this.$data.form, 'project_id', e.id);
            },
            onBuildingUpdate(e) {
                Vue.set(this.$data.form, 'building', e);
                Vue.set(this.$data.form, 'building_id', e.id);
            },
            onUnitTypeUpdate(e) {
                Vue.set(this.$data.form, 'unit_type', e);
                Vue.set(this.$data.form, 'unit_type_id', e.id);
                Vue.set(this.$data.form, 'area', e.area);
                Vue.set(this.$data.form, 'unit_price', e.base_price);
                Vue.set(this.$data.form, 'measurement_type', e.measurement_type);
                Vue.set(this.$data.form, 'measurement_type_id', e.measurement_type.id);
            },
            onMeasurementTypeUpdate(e) {
                Vue.set(this.$data.form, 'measurement_type', e);
                Vue.set(this.$data.form, 'measurement_type_id', e.id);
            },
            onUnitCategoryUpdate(e){
                Vue.set(this.$data.form, 'unit_category', e);
                Vue.set(this.$data.form, 'unit_category_id', e.id);
            },
            onProjectChargeTypeUpdate(e, index,arrIndex) {
                for(var i=0;i<this.form[arrIndex].length;i++){
                    if(this.form[arrIndex][i].project_charge_type_id == e.id){
                        this.$toast({
                            component: ToastificationContent,
                            props: {
                                title: 'Alert',
                                icon: 'BellIcon',
                                text: 'This option is already selected',
                                variant:'danger'
                            },
                        });
                        return 0;
                    }
                }
                Vue.set(this.$data.form[arrIndex][index], 'project_charge_type', e);
                Vue.set(this.$data.form[arrIndex][index], 'project_charge_type_id', e.id);
                Vue.set(this.$data.form[arrIndex][index], 'price', e.price);
            },
            addCharges() {
                this.form.extra_charges.push({
                    project_charge_type: null,
                    project_charge_type_id: null,
                    price: 0
                });
            },
            removeItem(index,arrIndex) {
                this.form[arrIndex].splice(index, 1);
            }
        },
    }
</script>

<style scoped>

</style>
