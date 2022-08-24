const btn = {
    props:['msg','target'],
    template:`
       <button :href="target">{{msg}}</button>
    `,
}

export default btn;