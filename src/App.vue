<template>
    <div>
        <div>
            <Foo></Foo>
        </div>
        <hr>
        <div>
            <Bar></Bar>
        </div>
    </div>
</template>

<script>
    import Foo from './components/Bar.vue'
    import Bar from './components/Foo.vue'
    export default {   
        components: {
            Foo,
            Bar
        }
    }
</script>