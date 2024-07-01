import { useSnack } from '../../../hooks/useSnack'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

export default function IceCreams() {
  const data = [
    {
      "id": 1,
      "snack": "dessert",
      "name": "Casquinha baunilha",
      "description": "A casquinha crocante e saborosa que nossos clientes amam.",
      "price": 4.5,
      "image": "https://i.imgur.com/YGmeoCm.jpg"
    },
    {
      "id": 2,
      "snack": "dessert",
      "name": "Chocolate granulado",
      "description": "Sorvete de chocolate com granulados de chocolate para você se deliciar.",
      "price": 6,
      "image": "https://i.imgur.com/osAHOLe.jpg"
    },
    {
      "id": 3,
      "snack": "dessert",
      "name": "Flocos",
      "description": "O tradicional flocos vem com cobertura de chocolate para adocicar seu dia.",
      "price": 7,
      "image": "https://i.imgur.com/qgnFLiy.jpg"
    },
    {
      "id": 4,
      "snack": "dessert",
      "name": "Creme",
      "description": "O simples sorvete de creme com um gosto irresistível.",
      "price": 6.5,
      "image": "https://i.imgur.com/dFLysrT.jpg"
    },
    {
      "id": 5,
      "snack": "dessert",
      "name": "Morango",
      "description": "O clássico sorvete de morango que deixe tudo mais leve.",
      "price": 10,
      "image": "https://i.imgur.com/0TWnEI7.jpg"
    }
  ]

  return (
    <>
      <Head title='Sobremessas' />
      <SnackTitle>Sobremessas</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
