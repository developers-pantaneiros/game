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
            type: String,
            required: true,
            default: ""
        }
    },
    methods: {
        onDecode(decodedString) {
            if (!this.isCodeValid()) {
                return
            }

            this.value = decodedString;
        },
        isCodeValid(decodedString) {
            return decodedString.length > 0;
        }
    }
};
</script>