import { Router, Request, Response } from "express";
import { PacienteController } from "./controllers/userPaciente/PacienteController";
import { AuthPacienteController } from "./controllers/userPaciente/AuthPacienteController";
import { EnderecoController } from "./controllers/endereco/EnderecoController";
import { MedicoController } from "./controllers/userMedico/MedicoController";
import { AuthMedicoController } from "./controllers/userMedico/AuthMedicoController";
import { DetailMedicoController } from "./controllers/userMedico/DetailMedicoController";
import { DetailPacienteController } from "./controllers/userPaciente/DetailPacienteController";
import { checkAuthenticationPaciente } from "./middlewares/checkAuth";
import { checkAuthenticationMed } from "./middlewares/checkAuthMed";
import { FichaController } from "./controllers/ficha/FichaController";
import { PlantaoController } from "./controllers/plantao/PlantaoController";
import { ConsultaController } from "./controllers/consulta/ConsultaController";
import { PrescricoesController } from "./controllers/prescricoes/PrescricoesController";
import { StatusPacienteController } from "./controllers/statusPaciente/StatusPacienteController";
import { MedicacaoController } from "./controllers/medicacao/MedicacaoController";
import { PrescricoesMedController } from "./controllers/prescricoesMed/PrescricoesMedController";


const router = Router()

router.post('/paciente', new PacienteController().handlePaciente)
router.post('/login', new AuthPacienteController().loginPaciente)
router.get('/paciente/detail', checkAuthenticationPaciente, new DetailPacienteController().handle)
router.post('/paciente/edit', checkAuthenticationPaciente, new PacienteController().updatePaciente)


router.post('/medico', new MedicoController().handleMedico)
router.post('/loginmedico', new AuthMedicoController().loginMedico)
router.get('/medico/detail', checkAuthenticationMed, new DetailMedicoController().handle)


router.post('/endereco', new EnderecoController().handleEndereco)
router.post('/endereco/:endereco_id', new EnderecoController().FindById)

router.post('/ficha', new FichaController().handleFicha)
router.get('/fichas', new FichaController().FindAll)
router.get('/fichas/:numero_sus', new FichaController().FindBySus)


router.post('/plantao', new PlantaoController().handlePlantao)
router.get('/plantao/find', new PlantaoController().FindByData)
router.get('/plantoes', new PlantaoController().FindAll)



router.post('/consulta', new ConsultaController().handleConsulta)
router.get('/consultas', new ConsultaController().FindAll)
router.get('/consultas/paciente/:numero_sus', new ConsultaController().Find_all_by_sus)
router.get('/consultas/medico/:crm', new ConsultaController().Find_all_by_crm)
router.get('/consultas/:id_consulta', new ConsultaController().Find_consulta)


router.post('/prescricao', new PrescricoesController().handlePrescricao)
router.get('/prescricoes', new PrescricoesController().FindAll)
router.get('/prescricoes/:id_consulta', new PrescricoesController().FindById)


router.post('/status', new StatusPacienteController().handleStatus)

router.post('/medicacao', new MedicacaoController().handleMedicacao)
router.get('/medicacoes', new MedicacaoController().FindAll)
router.get('/medicacoes/:id', new MedicacaoController().FindById)


router.post('/medicacoes-prescritas', new PrescricoesMedController().handlePrescricao)
router.get('/medicacoes-prescritas/all', new PrescricoesMedController().FindAll)
router.get('/medicacoes-prescritas/:id', new PrescricoesMedController().FindById)


export {router}