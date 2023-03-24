const toastTriggerSalvar = document.getElementById('btnSalvar')
const toastLiveExampleSalvar = document.getElementById('toastSalvar')
if (toastTriggerSalvar) {
  toastTriggerSalvar.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExampleSalvar)

    toast.show()
  })
}
const toastTriggerAdiciona = document.getElementById('btnAdiconaNoticiaNaHome')
const toastLiveExampleAdiciona = document.getElementById('toastAdiciona')
if (toastTriggerAdiciona) {
  toastTriggerAdiciona.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExampleAdiciona)

    toast.show()
  })
}
