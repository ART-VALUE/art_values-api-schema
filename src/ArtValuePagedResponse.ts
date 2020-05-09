import GenericPagedResponse from './GenericPagedResponse'
import ArtValueResponse from './ArtValueResponse'
  
type ArtPagedResponse = GenericPagedResponse<ArtValueResponse>

export default ArtPagedResponse