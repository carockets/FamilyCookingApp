<template>
    <div class="add-family-container">
        <form @submit="submit" class="add-family-form">
            <fieldset style="display: inline-block;">
                <div class="form-element">
                    <label class="form-label" for="family_name">Name</label>
                    <input class="form-input-text" type="text" placeholder="Name" v-model="family_name">
                </div>
                <div class="form-element">
                    <label class="form-label" for="family_email">E-Mail</label>
                    <input class="form-input-text" type="email" placeholder="E-Mail" v-model="family_email">
                </div>
                <div class="form-element">
                    <label class="form-label" for="family_name">Telefon</label>
                    <input class="form-input-text" type="text" placeholder="Telefon" v-model="phone_number">
                </div>
                <div class="form-element">
                    <label class="form-label" for="family_name">Partner</label>
                    <input class="form-input-text" type="text" placeholder="Partner" v-model="partner">
                </div>
                <div class="form-element">
                    <label class="form-label" for="family_name">Kocht?</label>
                    <input class="form-input-checkbox" type="checkbox" v-model="is_active_cooking">
                </div>
            </fieldset>
            <input class="button-primary" type="submit" value="Hinzufügen">
        </form>
    </div>
</template>

<script>
    import gql from "graphql-tag";
    import { InMemoryCache } from "apollo-cache-inmemory";

    const ADD_FAMILY = gql`
        mutation addFamily(
            $family_name: String!
            $family_email: String
            $phone_number: String!
            $partner: String
            $is_active_cooking: Boolean!
        ) {
            insert_families(
                objects: [
                    {
                        family_name: $family_name
                        family_email: $family_email
                        phone_number: $phone_number
                        partner: $partner
                        is_active_cooking: $is_active_cooking
                    }
                ]
            ) {
                returning {
                    family_id
                }
            }
        }
    `;

    export default {
        name: "AddFamily",
        data() {
            return {
                family_name: "",
                family_email: "",
                phone_number: "",
                partner: "",
                is_active_cooking: false
            };
        },
        apollo: {},
        methods: {
            submit(e) {
                e.preventDefault();
                const { family_name, family_email, phone_number, partner, is_active_cooking } = this.$data;
                this.$apollo.mutate({
                    mutation: ADD_FAMILY,
                    variables: {
                        family_name,
                        family_email,
                        phone_number, 
                        partner,
                        is_active_cooking
                    },
                    refetchQueries: ["getFamilies"]
                });
            }
        }
    }
</script>

<style>
    .add-family-container {
        border: 2px solid rgba(255,238,173);
        border-radius: 5px; 
        padding: 30px;
        margin-bottom: 30px;
        background-color: rgba(255,238,173, 0.1)
    }

    input {
        background-color: #fff !important;
    }

    .add-family-form {
        text-align: left;
        margin-bottom: 0 !important;
    }
    .form-input-text{
        width: 200px !important;
    }

    .form-element {
        display: inline-block;
        margin-right: 40px;
    }
</style>
