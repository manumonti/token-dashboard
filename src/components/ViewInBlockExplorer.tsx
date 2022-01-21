import { FC } from "react"
import { Link, LinkProps, useColorModeValue } from "@chakra-ui/react"
import createEtherscanLink, {
  ExplorerDataType,
} from "../utils/createEtherscanLink"
import { supportedChainId } from "../utils/getEnvVariable"

const ViewInBlockExplorer: FC<
  {
    id: string
    type: ExplorerDataType
    text: string
  } & LinkProps
> = ({ id, type, text = "View in Block Explorer", ...restProps }) => {
  const etherscanLink = createEtherscanLink(
    Number(supportedChainId),
    id || "",
    type
  )

  return (
    <Link
      textDecoration="underline"
      color={useColorModeValue("brand.500", "brand.300")}
      href={etherscanLink}
      _hover={{
        fontWeight: "bold",
      }}
      rel="noopener noreferrer"
      target="_blank"
      {...restProps}
    >
      {text}
    </Link>
  )
}

export default ViewInBlockExplorer
