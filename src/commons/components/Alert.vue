<template>
    <dialog class="nes-dialog is-rounded" :id="id">
        <form method="dialog">
            <p class="title">{{title}}</p>
            <p>{{message}}</p>
            <menu class="dialog-menu">
                <button class="nes-btn">{{confirmMessage}}</button>
            </menu>
        </form>
    </dialog>
</template>

<script>
// --- Importante ---
// Para abrir o alerta utilize: document.getElementById('ID_ESPECIFICADO').showModal();
export default {
    name: "alert",
    props: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true,
            default: ""
        },
        message: {
            type: String,
            required: true,
            default: ""
        },
        confirmMessage: {
            type: String,
            required: true,
            default: ""
        }
    }
}
</script>
