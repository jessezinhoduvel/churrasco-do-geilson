import { useContext } from "react";
import { ProdutosContext } from "../../Contexts/ProductsContext";

export const CardProduto = ({
  id,
  tipo = "primario",
}: {
  id: number;
  tipo?: "primario" | "secundario";
}) => {
  const { produtos } = useContext(ProdutosContext);

  // 1. Buscar o produto pelo id
  const produto = produtos.find((p) => p.id === id);

  // 2. Se não encontrar o produto, mostrar uma mensagem de erro ou nada
  if (!produto) {
    return <p>Produto não encontrado</p>;
  }

  // 3. Componente do título
  const Titulo = () => {
    return (
      <h4 className="text-gray-600 font-bold text-[18px] mb-1">
        {produto.nome}
      </h4>
    );
  };

  const Img = () => {
    return (
      <img
        className="w-full h-full object-cover"
        src={
          produto.imgUrl
            ? produto.imgUrl
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVcIhglanMSJ4RxCCYcW_a8_aKlGMw2iQ9vw&s"
        }
        alt={produto.nome}
      />
    );
  };

  const Desc = () => {
    return (
      <p className="line-clamp-2 overflow-hidden w-full leading-[110%] text-gray-600 text-[14px] mb-3">
        {produto.descricao}
      </p>
    );
  };

  const Valor = () => {
    return (
      <p className="text-orange-500 font-bold inline-block text-[16px]">
        R$ {produto.valor?.toFixed(2)}
      </p>
    );
  };

  return tipo === "primario" ? (
    <div className="card-produto shadow rounded-2xl overflow-clip flex">
      <div className="div-img-produto max-w-[30%] w-full">
        <Img />
      </div>
      <div className="div-info-produto p-4">
        <Titulo />
        <Desc />
        <div>
          <Valor />
        </div>
      </div>
    </div>
  ) : (
    // Aqui você pode adicionar o layout para o tipo "secundário"
    <div className="p-2 shadow rounded-lg overflow-clip reveal">
      <div className="aspect-[4/3] rounded-xl overflow-hidden">
        <Img />
      </div>
      <div className="flex flex-col justify-between bg-white">
        <div className="mt-4">
          <Titulo />
          <Desc />
        </div>
        <Valor />
      </div>
    </div>
  );

  // return tipo === "secundario" ? ():
};
