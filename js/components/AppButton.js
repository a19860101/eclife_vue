const btn = {
    // props:['msg','target'],
    props:{
        msg: {
            type:String,
            default:'no msg'
        },
        target:{
            type: String
        }
    },
    data(){
        return {
            input:''
        }
    },
    template:`
        <input type="text" v-model="input">
        <button :href="target" @click="handleAdd()">{{msg}}</button>
    `,
    methods:{
        handleAdd(){
            this.$emit('add',this.input);
        }
    }
}

export default btn;