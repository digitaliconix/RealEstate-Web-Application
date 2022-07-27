<template>
    <div v-if="show">
        <b-card :title="'Add New Company'">
            <b-row>
                <b-col md="12">
                    <b-form-group
                        label="Title"
                        label-for="mc-title"
                    >
                        <b-form-input
                            id="mc-title"
                            placeholder="Title"
                            v-model="form.title"
                            @keypress="isAllowedName"
                            @input="onCompanyName"
                        />
                        <error :error="error.title"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Domain"
                        label-for="mc-domain"
                    >
                        <b-form-input
                            id="mc-domain"
                            placeholder="Domain"
                            v-model="form.domain"
                            @keypress="isAllowedDomain"
                            @input="lower"
                        />
                        <error :error="error.domain"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Whole Domain"
                        label-for="mc-whole-domain"
                    >
                        <b-form-input
                            id="mc-whole-domain"
                            :disabled="true"
                            v-model="full_domain"
                        />
                    </b-form-group>
                </b-col>
            </b-row>
            <hr class="my-2">
            <b-row>
                <b-col md="6">
                    <b-form-group
                        label="User Name"
                        label-for="mc-user-name"
                    >
                        <b-form-input
                            id="mc-user-name"
                            placeholder="Name"
                            v-model="form.user.name"
                        />
                        <error :error="error[`user.name`]"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Email"
                        label-for="mc-user-email"
                    >
                        <b-form-input
                            id="mc-user-email"
                            placeholder="Email"
                            v-model="form.user.email"
                        />
                        <error :error="error[`user.email`]"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Password"
                        label-for="mc-user-password"
                    >
                        <b-form-input
                            id="mc-user-password"
                            placeholder="Password"
                            v-model="form.user.password"
                        />
                        <error :error="error[`user.password`]"/>
                    </b-form-group>
                </b-col>
                <b-col md="6">
                    <b-form-group
                        label="Confirm Password"
                        label-for="mc-user-confirm-password"
                    >
                        <b-form-input
                            id="mc-confirm-password"
                            placeholder="Confirm Password"
                            v-model="form.user.password_confirmation"
                        />
                        <error :error="error[`user.password_confirmation`]"/>
                    </b-form-group>
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
                        :to="{path:'/companies'}"
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
    import {BCard, BCardText, BLink, BRow, BCol, BFormInput, BFormGroup, BFormCheckboxGroup,BButton} from 'bootstrap-vue'
    import {form} from "@/libs/mixins";
    import {get} from '@/libs/api'
    import Error from "@/components/Form/Error";
    import Ripple from "vue-ripple-directive";

    function initialize(to) {
        let urls = {
            'add': `/api/companies/create`,
            'edit': `/api/companies/${to.params.id}/edit`
        };
        return (urls[to.meta.mode] || urls['add'])
    }

    export default {
        mixins: [form],
        components: {
            Error,
            BCard,
            BCardText,
            BLink,
            BRow,
            BCol,
            BFormInput,
            BFormGroup,
            BFormCheckboxGroup,
            BButton
        },
        directives: {
            Ripple
        },
        data() {
            return {
                show: false,
                resource: '/companies',
                store: '/api/companies',
                method: 'POST',
                title: 'Add',
                message:'New Company Added',
                permissions: [],
            }
        },
        computed : {
            full_domain(){
                return (this.form.domain ? this.form.domain : "") + this.form.base_domain;
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
                this.show = true
            },
            formSubmitted() {
                this.submit(this.form, (res) => {
                    this.success()
                    this.successfull(res)
                })
            },
            successfull(res) {
                this.$router.push(`${this.resource}`)
            },
            isAllowedDomain(e) {
                let char = String.fromCharCode(e.keyCode); // Get the character
                if(/^[A-Za-z0-9_]+$/.test(char)) return true; // Match with regex
                else e.preventDefault(); // If not match, don't add to input text
            },
            isAllowedName(e) {
                let char = String.fromCharCode(e.keyCode); // Get the character
                if(/^[A-Za-z0-9_ ]+$/.test(char)) return true; // Match with regex
                else e.preventDefault(); // If not match, don't add to input text
            },
            lower(e){
               this.form.domain = e.toLowerCase()
            },
            onCompanyName(e){
                this.form.domain = e.replaceAll(" ","").toLowerCase()
            }

        },
    }
</script>

<style scoped>

</style>
