import {Directive, DirectiveBinding, createApp} from 'vue'
import template from './index.vue'
const app = createApp(template)
const instance = app.mount(document.createElement('div'))
const noResult: Directive = {
    mounted(el: HTMLElement, binding: DirectiveBinding){
        if(binding.value){
          append(el)
        }
        
    },
    updated(el: HTMLElement, binding: DirectiveBinding) {
        if(binding.value !== binding.oldValue){
           binding.value? append(el) : remove(el)
        }
    },
}

function append(el: HTMLElement){
    el.appendChild(instance.$el)
}
function remove(el: HTMLElement){
    el.removeChild(instance.$el)
}
export default noResult