<template>
    <div name="snackbars">
        <v-snackbar v-model="show" :color="color" :timeout="timeout" :top="'top'" tile>
            {{ text }}

            <template v-slot:action="{ attrs }">
                <v-btn dark text v-bind="attrs" @click="show = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
export default {
    name: "Snackbar",
    created() {
        this.$store.subscribe((mutation, state) => {
            if (mutation.type === "POSITIVE_NOTIFICATION") {
                this.text = state.flashMessage;
                this.color = 'success';
                this.timeout = 3500;
                this.show = true;
            } else if (mutation.type === "NEGATIVE_NOTIFICATION") {
                this.text = state.flashMessage;
                this.color = 'error';
                this.timeout = 3500;
                this.show = true;
            }
        });
    },
    data() {
        return {
            show: false,
            color: "",
            text: "",
            timeout: 3500,
        };
    },
};
</script>


<style scoped>

</style>
