console.log('js vinculado')

const selectRegion = document.querySelector('#region')
const buttonCitySearch = document.querySelector('#search-button')

selectRegion.addEventListener('change', releaseSelect)
buttonCitySearch.addEventListener('click', searchCityByState)



const CONFIG = {       
    method: 'GET',
    headers: {
    'Content-Type': 'application/json'}
    }

function releaseSelect() {
    const selectRegion = document.querySelector('#region')
    const selectUf = document.querySelector('#federative-unit')
    const selectedOption = selectRegion.value
    selectUf.innerHTML = ''
    let options = ''
  
    switch (selectedOption) {
      case 'north':
        options = `
        <option value="AC">Acre (AC)</option>
        <option value="AP">Amapá (AP)</option>
        <option value="AM">Amazonas (AM)</option>
        <option value="PA">Pará (PA)</option>
        <option value="RO">Rondônia (RO)</option>
        <option value="RR">Roraima (RR)</option>
        <option value="TO">Tocantins (TO)</option>`
        break
  
      case 'northeast':
        options = `
        <option value="AL">Alagoas (AL)</option>
        <option value="BA">Bahia (BA)</option>
        <option value="CE">Ceará (CE)</option>
        <option value="MA">Maranhão (MA)</option>
        <option value="PB">Paraíba (PB)</option>
        <option value="PE">Pernambuco (PE)</option>
        <option value="PI">Piauí (PI)</option>
        <option value="RN">Rio Grande do Norte (RN)</option>
        <option value="SE">Sergipe (SE)</option>`
        break
  
      case 'centereast':
        options = `
          <option value="GO">Goiás (GO)</option>
          <option value="MT">Mato Grosso (MT)</option>
          <option value="MS">Mato Grosso do Sul (MS)</option>`
        break
  
      case 'southeast':
        options = `
         <option value="ES">Espírito Santo (ES)</option>
         <option value="MG">Minas Gerais (MG)</option>
         <option value="RJ">Rio de Janeiro (RJ)</option>
         <option value="SP">São Paulo (SP)</option>`
        break
  
      case 'south':
        options = `
         <option value="PR">Paraná (PR)</option>
         <option value="SC">Santa Catarina (SC)</option>
         <option value="RS">Rio Grande do Sul (RS)</option>`
        break
  
    }
    selectUf.innerHTML = options;
  }

  async function searchCityByState (){
    const stateSelect = document.querySelector('#federative-unit')
    const response = await fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${stateSelect.value}?providers=dados-abertos-br,gov,wikipedia`, CONFIG)
    const data = await response.json()
    console.log(data)
  }


