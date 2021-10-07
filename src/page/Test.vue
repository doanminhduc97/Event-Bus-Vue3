<template>
    <div>
        <h1>{{ test }} - TEST</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            newItem: '',
            list: null
        }
    },
    props: {
        test: {
            type: String,
            default: ''
        }
    },
    methods: {
        changeTest () {
            this.$emit('input', 'dddddddddddddddddddddddddddddd')
        },
        changeC () {
            this.$emit('change', this.test)
        }
    },
}
</script>