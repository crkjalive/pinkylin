const phone1 = "3114689389"
const phone2 = "3166471805"
const whatsapp1 = `http://wa.me/57${phone1}/`
const whatsapp2 = `http://wa.me/57${phone2}/`

export const add_phone = document.createElement('div')

add_phone.className = 'whatsapp_number'
add_phone.innerHTML = `
<div class="whatsapp_text">Contactenos:</div>
<a href="${whatsapp1}" target="_blank"> 
    <span class="icon-whatsapp whatsapp wm"> ${phone1}</span>
  </a>

  <a href="${whatsapp2}" target="_blank"> 
    <span class="icon-whatsapp whatsapp wm"> ${phone2}</span>
  </a>

  `
