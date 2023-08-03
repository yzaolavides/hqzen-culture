export const MousedownOutside = {
    bind(el, binding, vnode) {
        el.event = function (event) {
            if (!(el == event.target || el.contains(event.target))) {
                vnode.context[binding.expression](event);
            }
        };
        document.body.addEventListener('mousedown', el.event);
    },
    unbind(el) {
        document.body.removeEventListener('mousedown', el.event);
    },
};
