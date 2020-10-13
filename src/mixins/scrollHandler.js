export default{
    methods:{
        onScrollEnd(){
            console.warn("You must");
        },
        onBodySCroll(event){
            // console.log(e)
            const container = event.target;
            if(container.clientHeight + container.scrollTop >=
                container.scrollHeight){
                    console.log(event);
                    this.onScrollEnd()
                this.isRulesReaded = true;
            }
        }
    }
}