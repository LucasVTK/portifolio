import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iusto
      blanditiis, asperiores enim tempore harum saepe rem recusandae, cumque
      repellendus deserunt soluta eius corporis! Quibusdam id ratione vel
      eligendi? Voluptatum.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=LucasVTK&show_icons=true&theme=dracula&include_all_commits=true&count_private=true&custom_title=GitHub%20Stats&token=SEU_TOKEN_AQUI" />

      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=LucasVTK&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
