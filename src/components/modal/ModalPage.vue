<template>
    <div class="user-page container">
        <button type="button"
                class="btn btn-primary"
                @click="openModal">
                Открыть модальное окно
        </button>
        <modal
            v-if="isModalOpen"
            title="Очень важная информация"
            @close="isModalOpen = false">
            <div class="information">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ornare metus. Duis luctus consequat consectetur. Integer eleifend metus et condimentum rutrum. Nam vel laoreet diam, in gravida metus. Etiam sagittis diam nec lacus sodales, id hendrerit quam convallis. Proin finibus pretium commodo. Nam et luctus metus. Nulla vitae augue est. Donec vitae tristique urna, id cursus nunc.</p>

                <p>Curabitur non ex suscipit, bibendum turpis sed, pretium turpis. Aliquam ullamcorper vulputate sem at tincidunt. Integer libero purus, egestas sed commodo ut, hendrerit vel felis. Quisque venenatis, felis eu dictum sagittis, erat odio porttitor dolor, et elementum nisl enim at tortor. Cras mollis dignissim tellus, in blandit erat. Etiam id cursus erat. Sed blandit lobortis lorem eget venenatis. Vestibulum efficitur cursus vulputate. Sed iaculis enim a dolor aliquet, ac semper ligula porta.</p>

                <p>Aenean aliquam dictum justo a tincidunt. Vivamus interdum nisl vitae nibh bibendum vulputate. Nulla lacus velit, semper sed lacus quis, lobortis feugiat leo. Etiam pharetra velit sit amet nulla varius, sit amet dignissim augue viverra. Quisque eu consectetur eros, quis porttitor tellus. Quisque vitae nulla quis turpis egestas mattis at eu justo. Morbi sed ligula non dui bibendum congue. Mauris ut tellus sed est porttitor faucibus eu a lorem. Vivamus quis rutrum turpis, ut viverra odio. Phasellus elementum pellentesque dictum. Nam ultrices orci nec erat tempus volutpat.</p>

                <p>Sed sed lacus tortor. Sed mollis, urna ullamcorper molestie bibendum, orci sapien semper ante, non feugiat nulla metus vel lacus. Fusce dapibus commodo felis id euismod. Donec porta risus ac mollis tristique. Suspendisse condimentum mauris augue, vel posuere ex sollicitudin quis. Fusce faucibus arcu id dictum pellentesque. Fusce ornare nisi ut est feugiat congue. Nam porta, magna ultricies posuere maximus, nisl nisl feugiat massa, vel tincidunt velit arcu a enim. Cras ac consequat quam. Phasellus interdum purus non mauris mollis laoreet. Maecenas interdum mauris quis felis elementum fringilla. Nulla velit elit, pharetra a cursus sed, varius nec turpis. Maecenas posuere nibh lectus, eu tempus nisi finibus eu. Integer luctus justo nec erat dapibus elementum. Vestibulum placerat ligula pellentesque tempor aliquam. Nulla in est consequat, sodales libero non, vulputate ligula.</p>

                <p>Aenean quis tristique velit. Sed nec pretium magna. Aliquam sollicitudin orci sit amet odio ultrices, ac posuere nulla finibus. Suspendisse vehicula justo ac hendrerit vestibulum. Fusce sodales velit non congue facilisis. Donec ornare nisi et convallis posuere. Nulla viverra nulla non risus varius sodales. Nullam id tristique velit, vitae ornare odio. Nulla suscipit, orci non accumsan interdum, ligula enim placerat lorem, id eleifend dui diam non ex. Suspendisse mauris felis, malesuada et commodo sit amet, blandit pretium neque. Vivamus facilisis ligula mi, ut pellentesque purus tincidunt quis. Morbi mattis neque non eros vulputate vulputate.</p>

                <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas consectetur, nibh in sollicitudin sodales, augue sem mollis turpis, ut sodales mi felis eu odio. Aliquam in risus sem. Donec malesuada nisi ut dui molestie feugiat. Vestibulum in nisl ut nunc placerat tincidunt eu malesuada mauris. Etiam vel elementum urna. Suspendisse feugiat vel velit eu efficitur. Aenean euismod enim vel eleifend suscipit. Nullam eget odio imperdiet, posuere nisl quis, placerat lorem. Vestibulum in libero lobortis, iaculis massa at, consectetur massa. In vitae interdum neque, ut auctor orci. In vitae tortor tristique, interdum nibh quis, auctor mauris. Donec dignissim nibh et erat placerat dictum. Etiam gravida, urna vitae accumsan suscipit, lacus turpis faucibus ipsum, at viverra nulla diam sed leo. Nulla imperdiet elit mauris, at elementum elit efficitur non.</p>
            </div>
            </modal>
    </div>
</template>

<script>

import Modal from './Modal'

export default {
    components:{
        Modal
    },
    data(){
        return{
            isModalOpen: false
        }
    },
    methods:{
        openModal(){
            this.isModalOpen = true;
        }
    }
}
</script>

<style lang="sass" scoped>

</style>