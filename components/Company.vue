<template>
    <a class="result-card__image-link">
        <img
            v-if="company.logo !== null"
            :src="company.logo"
            :alt="'Logo-' + company.name"
            class="artdeco-entity-image experience-item artdeco-entity-image--company experience-item--company artdeco-entity-image--square-4 experience-item--square-4 result-card__image lazy-loaded"
        />
    </a>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import Company from './model/company'

@Component
export default class CompanyComponent extends Vue {
    @Prop(Company) private company!: Company
}
</script>
