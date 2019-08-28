import suiBadge from './suiBadge'
// import liuButton from './liuButton'

const components = [
    suiBadge,
    // liuButton
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
    // liuButton
}