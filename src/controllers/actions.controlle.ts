import { Request, Response } from 'express'
import Action from '../models/action'
export const getActions = async (request: Request, response: Response) => {

    const listAction = await Action.findAll()

    response.json({
        listAction
    })
}

export const getAction = async (request: Request, response: Response) => {
    const { id } = request.params
    const listAction = await Action.findByPk(id)

    if (listAction) {
        response.json({
            listAction
        })
    } else {
        response.status(404).json({
            msg: `El dato no existe ${id}`
        })
    }

}

export const deleteAction = async (request: Request, response: Response) => {
    const { id } = request.params
    const listAction = await Action.findByPk(id)

    if (!listAction) {
        response.status(404).json({
            msg: `El dato no existe ${id}`
        })
    } else {
        await listAction.destroy()
        response.json({
            msg: `La acción se ejecutó con éxito `
        })
    }
}

export const postAction = async (request: Request, response: Response) => {
    const { body } = request
    try {
        await Action.create(body)
        response.json({
            msg: `La acción se ejecutó con éxito `
        })
    } catch (error) {
        response.status(404).json({
            msg: `Error`,
            error
        })
    }

}

export const putAction = async (request: Request, response: Response) => {
    const { id } = request.params
    const { body } = request
    const listAction = await Action.findByPk(id)
    if (!listAction) {
        response.status(404).json({
            msg: `El dato no existe ${id}`
        })
    } else {
        await listAction.update(body)
        response.json({
            msg: `La acción se ejecutó con éxito `
        })
    }
}


