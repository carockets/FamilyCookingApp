<template>
    <div>
        <AddFamily/>
        <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>E-Mail</th>
                    <th>Telefon</th>
                    <th>Partner</th>
                    <th>kocht?</th>
                    <!-- <th></th> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="family in families" :key="family.family_id">
                    <td>{{ family.family_name }}</td>
                    <td>{{ family.family_email }}</td>
                    <td>{{ family.phone_number }}</td>
                    <td>{{ family.partner }}</td>
                    <td><input type="checkbox" v-bind:checked="family.is_active_cooking" /></td>
                    <!-- <td><button class="button-delete-family" v-on:click="deleteFamily(family.family_id)">Löschen</button></td> -->
                </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>

<script>
    import AddFamily from './AddFamily'
    import gql from "graphql-tag";

    const GET_FAMILIES = gql`
        query getFamilies {
            families {
                family_id,
                family_name,
                family_email,
                partner
                phone_number,
                is_active_cooking
            }
        }
    `;

    export default {
        components: { AddFamily },
        name: "FamilyList",
            data() {
                return {
                    families: []
                };
            },
            apollo: {
                families: {
                    query: GET_FAMILIES
                },
            methods: {
                deleteFamily(id) {
                    this.$apollo.mutate({
                        mutation: DELETE_FAMILY,
                        variables: {
                            id
                        },
                        refetchQueries: ["getFamilies"]
                    });
                }
            }
        }

    }
</script>

<style>
    .button-delete-family {
        background-color: rgba(255,111,105);
        color: #ffeead;
        border: none;
    }
</style>

