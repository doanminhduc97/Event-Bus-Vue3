<template>
    <div>
        <test :test="test"/>
        <button @click="changeTest">Click</button>
    </div>
</template>
<script>
import Test from './Test.vue'

export default {
    components: {
        Test
    },
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
            this.$emit('changeTestt', 'Change test')
        }
    },
}
</script>