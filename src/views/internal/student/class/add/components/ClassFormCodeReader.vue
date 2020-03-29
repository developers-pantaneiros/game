<template>
    <qrcode-stream @decode="onDecode"></qrcode-stream>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";
export default {
    name: "class-form-code-reader",
    components: { QrcodeStream },
    props: {
        value: {
            type: Object,
            required: true
        }
    },
    methods: {
        onDecode(decodedString) {
            if (!this.isCodeValid(decodedString)) {
                return
            }

            this.value.code = decodedString
            this.$emit('addClass')
        },
        isCodeValid(decodedString) {
            return decodedString.length > 0;
        }
    }
};
</script>