import { CalculateBolloAuto } from '../core/useCases/CalculateBolloAuto/CalculateBolloAuto'
import repositoryConfig from './repositories'
import cvKwConverterConfig from './cvKwAdapter'

const calculateBolloAuto = new CalculateBolloAuto(
    repositoryConfig.bolloAutoFileSystem,
    cvKwConverterConfig.cvKwModuleAdapter
)

export default { calculateBolloAuto }
