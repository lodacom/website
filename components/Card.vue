<template>
    <section class="top-card-layout">
        <div class="top-card-layout__entity-info-container">
            <div class="top-card-layout__entity-info">
                <h1 class="top-card-layout__title">{{ people.firstname }} {{ people.lastname }}</h1>
                <h2
                    class="top-card-layout__headline"
                >{{ experience.title }} chez {{ experience.company.name }}</h2>
                <h3 class="top-card-layout__first-subline">
                    <span
                        class="top-card__subline-item"
                    >Région de {{ people.city }}, {{ people.country }}</span>
                </h3>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import People from './model/people'
import Experience from './model/experience'

@Component
export default class Card extends Vue {
    @Prop(People) private people!: People
    @Prop(Experience) private experience!: Experience
}
</script>
