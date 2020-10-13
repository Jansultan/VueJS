<template>
    <div class="modal fade show">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        {{title}}
                    </h5>
                    <button
                        type="button"
                        class="close"
                        aria-label="Close"
                        @click="closeModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body"
                    ref="modalBody"
                    @scroll="onBodySCroll">
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer">
                        <button
                        type="button"
                        class="btn btn-secondary"
                        @click="closeModal">
                        отмена
                        </button> 
                        <button
                            type="button"
                            class="btn btn-primary"
                            @click="closeModal"
                            :disabled="!isRulesReaded">
                            принять
                        </button>
                    </slot>                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import ScrollHandler from "../../mixins/scrollHandler";
export default {
    props:{
        title: {
            type: String,
            default: ''
        },
    },
    // mixins:[ScrollHandler],
    data(){
        return{
            isRulesReaded: false
        }
    },
    created(){
        this.$log();
    },
    mounted(){
        const modalBody = this.$refs.modalBody
        modalBody.scrollTop = modalBody.scrollHeight - modalBody.clientHeight
    },
    methods:{
        closeModal(){
            this.$emit('close')
        },
        onScrollEnd(){
            this.isRulesReaded = true;
        }
    }
}
</script>

<style lang="scss" scoped>
.modal{
    display: block;
    &-body{
        height: 200px;
        overflow-y: scroll;
    }
}
</style>