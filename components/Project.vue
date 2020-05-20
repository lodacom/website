<template>
    <div class="experience-item__description experience-item__meta-item">
        <div class="show-more-less-text show-more-less-description">
            <span v-show="project.name.length > 0">{{ project.company }} - {{ project.name }}</span>
            <button
                v-show="project.name.length > 0 && !isOpen"
                class="show-more-less-text__button show-more-less-description__button show-more-less-text__button--more"
                @click="isOpen = !isOpen"
            >Voir plus</button>
            <p
                v-show="project.name.length == 0 || isOpen"
                class="show-more-less-text__text--less"
                v-html="project.description"
            ></p>
            <button
                v-show="project.name.length > 0 && isOpen"
                class="show-more-less-text__button show-more-less-description__button"
                @click="isOpen = !isOpen"
            >Voir moins</button>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import Project from '../pages/model/project'

@Component
export default class ProjectComponent extends Vue {
    @Prop(Project) private project!: Project
    private isOpen: boolean = false
}
</script>
