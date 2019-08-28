import suiBadge from './suiBadge'
import suiHeader from './suiHeader'
// import liuButton from './liuButton'

const components = [
    suiBadge,
    // liuButton
    suiHeader
]

const install = function (Vue) {
    if(install.installed) return
    components.map(component => Vue.component(component.name,component))
}

if (typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}

export default {
    install,
    suiBadge,
    suiHeader
    // liuButton
}