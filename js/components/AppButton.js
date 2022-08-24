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
    template:`
       <button :href="target">{{msg}}</button>
    `,
}

export default btn;