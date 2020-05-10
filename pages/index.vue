<template>
    <b-row>
        <b-col cols="3">
            <div>
                <strong>Nom</strong>
                : {{people.lastname}}
            </div>
            <div>
                <strong>Prénom</strong>
                : {{people.firstname}}
            </div>
            <div>
                <strong>Ville</strong>
                : {{people.city}}
            </div>
            <div>
                <strong>Pays</strong>
                : {{people.country}}
            </div>
        </b-col>
        <b-col cols="9">
            <b-row v-for="company in companies" :key="company.id">
                <b-col cols="3">
                    <div>
                        <img
                            v-if="company.logo !== null"
                            v-bind:src="company.logo"
                            v-bind:alt="'Logo-'+company.name"
                            height="48"
                            width="48"
                        />
                    </div>
                    <div>{{company.name}}</div>
                </b-col>
                <b-col cols="9">
                    <b-row v-for="experience in company.experiences" :key="experience.id">
                        <b-col>{{experience.fromDate | formatDate('MMM YYYY') }} - {{experience.toDate | formatDate('MMM YYYY')}}</b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import People from './model/people'
import CompanyService from './service/company-service'

@Component
export default class Nuxt extends Vue {
    asyncData(context: any) {
        const companyService: CompanyService = new CompanyService()
        return {
            people: new People(),
            companies: companyService.retreiveCompanies()
        }
    }
}
</script>

<style></style>
