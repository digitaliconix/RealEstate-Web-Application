<template>
    <div v-if="show">
        <b-card :title="`${title} Project`">
            <b-row>
                <b-col md="6">
                    <b-form-group
                        label="Title"
                        label-for="mc-title"
                    >
                        <b-form-input
                            id="mc-title"
                            placeholder="Title"
                            v-model="form.title"
                        />
                        <error :error="error.title"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Website"
                        label-for="mc-website"
                    >
                        <b-form-input
                            id="mc-website"
                            placeholder="Website"
                            v-model="form.website"
                        />
                        <error :error="error.website"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Country"
                        label-for="mc-country-id"
                    >
                        <x-tag-input resource="/api/search/countries"
                            :value="form.country" @input="onCountryUpdate"
                            column="title" name="title"
                        >

                        </x-tag-input>
                        <error :error="error.country_id"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="City"
                        label-for="mc-city-id"
                    >
                        <x-tag-input :resource="`/api/search/cities?country_id=${form.country_id}`"
                            :value="form.city" @input="onCityUpdate" :disabled="form.country_id == null ? true : false"
                            column="title" name="title"
                        ></x-tag-input>
                        <error :error="error.city_id"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Location"
                        label-for="mc-location"
                    >
                        <b-form-textarea
                            id="mc-location"
                            placeholder="Location"
                            v-model="form.location"
                        />
                        <error :error="error.location"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Nearest Location"
                        label-for="mc-nearest-location"
                    >
                        <b-form-textarea
                            id="mc-nearest-location"
                            placeholder="Nearest Location"
                            v-model="form.nearest_location"
                        />
                        <error :error="error.nearest_location"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Phone Number"
                        label-for="mc-phone-number"
                    >
                        <b-form-input
                            id="mc-phone-number"
                            placeholder="Phone Number"
                            v-model="form.phone_number"
                        />
                        <error :error="error.phone_number"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Land Space"
                        label-for="mc-land-space"
                    >
                        <b-form-input
                            id="mc-land-space"
                            placeholder="Land Space"
                            v-model="form.land_space"
                        />
                        <error :error="error.land_space"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Project Type"
                        label-for="mc-project-type-id"
                    >
                        <x-tag-input resource="/api/search/project_types"
                                     :value="form.project_type" @input="onProjectTypeUpdate"
                                     column="title" name="title"
                        >
                        </x-tag-input>
                        <error :error="error.project_type_id"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Project Images (Multiple Images)"
                        label-for="mc-project-image"
                    >
                        <b-form-file
                            id="mc-project-image"
                            v-model="form.project_images"
                            placeholder="Choose a file or drop it here..."
                            drop-placeholder="Drop file here..."
                            accept=".jpg, .jpeg, .png, .gif"
                            multiple
                        />
                    </b-form-group>
                </b-col>
                <b-col md="12" class="mb-2">
                    <template v-if="form.images">
                        <b-container fluid class="p-1 bg-dark">
                            <b-row>
                                <b-col md="3" class="p-1" v-for="(item,index) in form.images">
                                    <b-img @click="delete_image(item.id,index)" thumbnail fluid :src="`/api/attachment/project_${form.id}/${item.path}`"  />
                                </b-col>
                            </b-row>
                        </b-container>
                    </template>
                </b-col>
            </b-row>
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
                        :to="{path:'/projects'}"
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
    import {BCard, BCardText, BLink, BRow, BCol, BImg, BContainer, BFormInput, BFormGroup, BFormFile, BFormCheckboxGroup,BButton, BFormTextarea} from 'bootstrap-vue'
    import {form} from "@/libs/mixins";
    import {get} from '@/libs/api'
    import Error from "@/components/Form/Error";
    import Ripple from "vue-ripple-directive";
    import XTagInput from "@/components/Form/TagInput";

    function initialize(to) {
        let urls = {
            'add': `/api/projects/create`,
            'edit': `/api/projects/${to.params.id}/edit`
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
            BImg,
            BFormInput,
            BFormGroup,
            BFormFile,
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
                resource: '/projects',
                store: '/api/projects',
                method: 'POST',
                title: 'Add',
                message:'New Project Added',
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
                    this.store = `/api/projects/${this.$route.params.id}?_method=PUT`;
                    this.title = 'Edit';
                    this.message = 'Project has been updated';
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
            onCountryUpdate(e) {
                Vue.set(this.$data.form,'country', e);
                Vue.set(this.$data.form,'country_id', e.id);
                Vue.set(this.$data.form,'city', null);
                Vue.set(this.$data.form,'city_id', null);
            },
            onCityUpdate(e) {
                Vue.set(this.$data.form,'city', e);
                Vue.set(this.$data.form,'city_id', e.id);
            },
            onProjectTypeUpdate(e) {
                Vue.set(this.$data.form,'project_type', e);
                Vue.set(this.$data.form,'project_type_id', e.id);
            },
            delete_image(id,index) {
                get('/api/delete_project_image/' + id).then(res => {
                    if (res.data.saved) {
                        this.form.images.splice(index, 1)
                        this.message = 'Image Deleted';
                        this.deleted()
                    }
                })
            }
        },
    }
</script>

<style scoped>

</style>
