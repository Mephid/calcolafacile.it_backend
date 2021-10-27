import { BolloAutoFileSystemRepository } from '../infrastrucutre/repositories/fileSystem/BolloAutoFileSystemRepository'
import dataStore from '../infrastrucutre/repositories/fileSystem/data/bolloTabs'

const bolloAutoFileSystem = new BolloAutoFileSystemRepository(dataStore)

export default { bolloAutoFileSystem }
