// service1/src/controllers/service1Controller.ts
import { Request, Response } from 'express';

export const getService1Data = (req: Request, res: Response) => {
  res.json({ message: 'Data from iceye' });
};

export const getCatalogItems = async (req: Request<{}, {}, { datetime: string }>, res: Response) => {

  try {
    const iceyeToken = "eyJraWQiOiJ3dzhJZ3VJQ2QwMWJ4WmJKcS02YlQzb0ZqMnBiLUxFR1hSZENHNjM4WFBzIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULmFfU3R2N0FmdnlieVN0TXh4XzZMOEdodjhIcXpDeDJha3VXRFRiZGViNFUiLCJpc3MiOiJodHRwczovL2N1c3RvbWVyLWljZXllLm9rdGEuY29tL29hdXRoMi9hdXMya3ZscXduWHBHSURLaTQxNyIsImF1ZCI6ImFwaTovL3BvcnRhbGFwaS1wdWJsaWMiLCJpYXQiOjE3MTcwNDU3MDQsImV4cCI6MTcxNzA0OTMwNCwiY2lkIjoiMG9hMmt2azJ6a1V0TGNDTzk0MTciLCJ1aWQiOiIwMHVha2V6Z3FhamtwVVduczQxNyIsInNjcCI6WyJjYXRhbG9nLnJlYWQiLCJvcmRlcnMucmVhZCIsImJ1bmRsZXMud3JpdGUiLCJwcm9kdWN0X2NvbnZlcnNpb24ud3JpdGUiLCJidW5kbGVzLnJlYWQiLCJ0YXNrcy53cml0ZSIsInJlcHJvY2Vzcy53cml0ZSIsImN1c3RvbWVycy5yZWFkIiwib3JkZXJzX2NvbGxlY3Rpb24ud3JpdGUiLCJvcmRlcnNfY2F0YWxvZy53cml0ZSIsIm9yZGVycy5leHBvcnQiLCJhY3Rpdml0aWVzLnJlYWQiLCJjb250cmFjdHMucmVhZCJdLCJhdXRoX3RpbWUiOjE3MTcwNDU3MDQsInN1YiI6IjAwdWFrZXpncWFqa3BVV25zNDE3Iiwic3ViX3R5cGUiOiJVU0VSIiwiZW1haWwiOiJpbnQwMF9zZXJ2aWNlK2FjY291bnRAc3Vob3JhLmNvbSJ9.EH81zWluGdnK0eDrqPpnZ4XmhfZoqPajeBGGKuanVI7NkQImS4SqNNYYynrRN_gxnhsDCN3HNul95lPd_0eQM7gBR84b8gZmvRm-ZtQB0w707mhYDgowBwXlQdVvC-o9DMAnIjO4wrz-3oiWuhN6N1ANkMJuAFTpMRsaBOs-vog6QI2Ucog2KAed2uoEsjDLUWOSly07DGMpPk6aNwYLCGSVOl68DPUlh-fBlu-w9JPNAiX-vO89Bxc8SNR7sqgXwZNBJIvT8zxDcYVGxRwmpnRAI_Bqf29fwnsktrChaK73xC9ffbN4gqotkbWeKYEx7jVADqUdIL21fwPTuK7JGw"

    const response = await fetch(`https://platform.iceye.com/api/catalog/v1/items?datetime=${encodeURIComponent(req.body.datetime)}`, {
      headers: {
        "Authorization": "Bearer " + iceyeToken,
        "Content-Type": "application/json"
      }
    })

    const body = await response.json()

    return res.status(200).json(body)
  } catch (error) {
    return res.status(200).json(error)
  }
}