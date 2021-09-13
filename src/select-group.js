import { useForm } from "react-hook-form"

const RegionalBlock = ({onRegionSelect})=>{

const {register, handleSubmit} = useForm();

    return (
        <form onChange={handleSubmit(e=>onRegionSelect(e))}>
            <select className='select-region' {...register('region')}>
                    <option value='EU'>EU (European Union)</option>
                    <option value='EFTA'>EFTA (European Free Trade Association)</option>
                    <option value='CARICOM'>CARICOM (Caribbean Community)</option>
                    <option value='PA'>PA (Pacific Alliance)</option>
                    <option value='AU'>AU (African Union)</option>
                    <option value='USAN'>USAN (Union of South American Nations)</option>
                    <option value='EEU'>EEU (Eurasian Economic Union)</option>
                    <option value='AL'>AL (Arab League)</option>
                    <option value='ASEAN'>ASEAN (Association of Southeast Asian Nations)</option>
                    <option value='CAIS'>CAIS (Central American Integration System)</option>
        </select>
        </form>
    )
}

export default RegionalBlock