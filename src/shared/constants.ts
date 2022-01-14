import { environment } from "../environments/environment";



export class CONST {

    //################################## NOTA BENE PER CAMBIO VARIABILI DI SVILUPPO/PRODUZIONE INTERVENIRE SULLE SEGUENTI COSTANTI: ###########################
    // ###### urlroot_server_url
    // ###### token_oauth_authorization
    // ###### processoId
    // ###### apachePort

    public static TYPE_DB: string = "db";
    public static TYPE_TOPIC: string = "topic";

    public static cookie: boolean = false;   

    public static readonly urlroot_server_url = environment.urlroot_server_url;   // SVILUPPO
    public static readonly urlroot_server_protocoll_http = 'http://';
    public static readonly urlroot_server_protocoll_ssl = 'https://';
    public static readonly urlroot_server = CONST.urlroot_server_protocoll_http + CONST.urlroot_server_url;
    public static readonly urlroot_server_SSL = CONST.urlroot_server_protocoll_ssl + CONST.urlroot_server_url;

    // ############### GESTIONE SERVICE ###############################
    public static readonly portRoot_misb_service = 8090;
    public static readonly portRoot_download_service = 8091;
    public static readonly portRoot_report_service = 8093;
    public static readonly portRoot_notification_service = 8195;
    public static readonly portRoot_modeler_service = 8096;

    public static readonly urlroot_misb_service = CONST.urlroot_server + `:${CONST.portRoot_misb_service}/`;
    public static readonly urlroot_download_service = CONST.urlroot_server + `:${CONST.portRoot_download_service}/`;
    public static readonly urlroot_report_service = CONST.urlroot_server + `:${CONST.portRoot_report_service}/`;
    public static readonly urlroot_notification_service = CONST.urlroot_server + `:${CONST.portRoot_notification_service}/`;
    public static readonly urlroot_modeler_service = CONST.urlroot_server + `:${CONST.portRoot_modeler_service}/`;

    // public static readonly urlroot_APACHE = CONST.urlroot_server+":80/"; // ########### ATTENZIONE SUL SERVER DI PRODUZIONE LA PORTA IN ASCOLTO è 8088 ##################
    public static readonly portRoot_DIST = environment.portRoot_DIST;

    public static readonly urlroot_APACHE = `${CONST.urlroot_server}${environment.apachePort}`; // ########### ATTENZIONE SUL SERVER DI PRODUZIONE LA PORTA IN ASCOLTO è 8088 ##################
    public static readonly urlroot_DIST = CONST.urlroot_server + `:${CONST.portRoot_DIST}/`;

    // ############### GESTIONE WSO2 ###############################
    public static readonly portRoot_wso2_serverBackPostgree = 8094;
    public static readonly portRoot_wso2_spidURL = 8022;
    public static readonly portRoot_wso2_spidURL_PROD = 8023;


    public static readonly urlroot_wso2_serverWSO2 = CONST.urlroot_server_SSL + ':' + environment.wso2_token_port;
    public static readonly urlroot_wso2_serverBackPostgree = CONST.urlroot_server + `:${CONST.portRoot_wso2_serverBackPostgree}`;
    public static readonly urlroot_wso2_spidURL = CONST.urlroot_server + `:${CONST.portRoot_wso2_spidURL}`;
    public static readonly urlroot_wso2_spidURL_PROD = CONST.urlroot_server + `:${CONST.portRoot_wso2_spidURL_PROD}`;
    public static readonly spidUrlLogin = CONST.urlroot_wso2_spidURL_PROD + '/login';

    public static readonly urlroot_notification_serviceForSocket = CONST.urlroot_server + `:${CONST.portRoot_notification_service}/`;

    // ############### GESTIONE SPID ###############################
    public static readonly portRoot_spid_sso = 8088;

    public static readonly urlroot_spid_sso = CONST.urlroot_server + `:${CONST.portRoot_spid_sso}/sso`;

    // ############### GESTIONE TOKEN ###############################
    public static readonly TOKEN = 'access_token';
    public static readonly urlroot_token = CONST.urlroot_server_SSL + ':' + environment.wso2_token_port + '/token';
    public static readonly token_oauth_authorization = environment.token_oauth_authorization;

    // ############### GESTIONE ENVIRONMENT ###############################   
    public static readonly portEnvironment_baseUrl = 8180;

    public static readonly environment_baseUrl = window.location.protocol + "//" + window.location.hostname + `:${CONST.portEnvironment_baseUrl}/apirec`;
    public static readonly environment_projectName = '/';
    public static readonly environment_process_auth_id = '4ad79823-31cd-452f-accb-127a832a0aa9';
    public static readonly WEB_RESOURCE_BASE_URL = CONST.environment_baseUrl + CONST.environment_projectName;


    public static readonly JRXML_MODEL = {
        'A_Modello_Istanza_autorizzazione': 'A_Modello Istanza autorizzazione_v.01_20200225.jrxml',
        'Mod_31_bis__check_list': 'Mod_31_bis__check_list.jrxml'
    };

    // ################# LOCAL STORAGE NAME #####################
    public static readonly passwordLSName = 'password';
    // ########################################


   
    public static readonly listTypeChecklist = [
        { value: '', label: 'Tutti' },
        { value: 'convalidate', label: 'Convalidate' },
        { value: 'bozze', label: 'Bozze' },
        { value: 'archiviate', label: 'Archiviata' }
    ];
    // Tutti
    // Convalidate
    // Bozze
    // Archiviate
    public static allNotifications: Array<any> = new Array();
    public static notifications: Array<any> = new Array();
    public static notificationsInviate: Array<any> = new Array();
    public static utenteLoggato: any;
    public static CFTaskAssegnato: any;
    public static idDelegatoAzienda: any;
    public static loggedUser: any;
    public static tipoIncarico: any;
    public static listVociMenu: Array<any> = new Array();
    public static processoId = environment.processoId;   // dipende dalla configurazione
    // public static processoId = 'cd9d1a91-fd70-4d58-a31e-772f311eeb82'   //SVILUPPO
    // public static processoId = '5bd9a224-7605-4521-a89d-fe7fa35e43e8'     //PRODUZIONE
    public static processName = 'AUTH_v04_Mirko';
    public static subProcessNameRO = 'RequisitiOggettivi';
    public static subProcessNameRS = 'RequisitiSoggettivi';
    public static istanceCamundaId = '';
    public static taskId = '';
    public static instanceSelected: any;

    public static allProcessiAttivi: any;

    public static taskvariables: any = {};

    public static emailRegistrazione: string = '';

    public static process_auth_id = 'bb955077-ad7a-4b07-a76e-a0033b2ebd2b';
    public static process_checklist_id = 'c05d7e1d-4b77-4aad-87c4-df1229acd404';
    public static process_status_id = '810705a7-db8b-4326-aa0e-574364dc7295';

    public static process_selected_detail: any;

    public static cambio: any;
    public static tipo: any;
    public static tecnologico: any;

    public static strutturaId = '';

    public static isReadOnlyForm = false;
    public static isIscrittoWS: boolean = false;
    public static allNotificationCount = 0;
    public static notificationCount = 0;
    public static BOOL: string = 'BOOL';
    public static STRING: string = 'STR';
    public static urlToNotShowHeaders = [
        'atterraggio-registrazione',
        'verifyUser',
        'verifyAccount',
        'recovery',
        'resetPassword',
        'registration',
        'loginStruttura',
        'login-test',
        'login'
    ];
    public static responsabileProcedimento = 'c955c871-19de-4954-be4e-c5e51ee59e4f';
    public static responsabileIstruttoria = '0211dfc7-4102-41cd-b9b2-66f303790bb6';
    public static operatore = 'ecc2072b-708b-41ff-9a9b-f5e88274fb58';
    public static RespGDV = 'd7ff4f3b-bb28-450b-9d5d-d0dc7e85ac86';
    public static MembroGDV = 'e010fee0-ecc3-4217-b59b-d970ae492814';
    public static gruppoDiVerifica = '62fe8abb-5f6d-4cf6-ba5a-a17bd355d52d';
    public static idAppartiene = environment.idAppartiene;

    public static process_list_names = [
        {
            nome: 'AUTH_v04_Mirko',
            id_camunda: environment.processoIdNome,
            id: environment.processoId
        },
        //  {
        //     id: "cd9d1a91-fd70-4d58-a31e-772f311eeb82",
        //     id_camunda: "AUTH_v04_Mirko:50:15bcab38-d17b-11ea-b013-0242c0a8e002",
        //     nome: "Processo Di Autorizzazione"
        // }

    ];

    public static draft_checkList_selected: any;
    public static checkList_selected: any;
    public static checkList_selected_ID: any;

    public static fileType_list = [
        {
            name: 'PDF',
            value: 'pdf'
        }, {
            name: 'JPG',
            value: 'jpg'
        }, {
            name: 'PNG',
            value: 'png'
        },
        {
            name: 'DWG',
            value: 'dwg'
        },
    ];

  
    public static availableButtons = [
        { buttonId: 'btnSalvaBozza', name: 'Salva Bozza', visible: true, disabled: false },
        { buttonId: 'btnConvalidaForm', name: 'Convalida Form', visible: true, disabled: false },
        { buttonId: 'btnAvvioRaccoltaDati', name: 'Avvio Raccolta Dati', visible: true, disabled: false },
        { buttonId: 'btnFineRaccoltaDati', name: 'Fine Raccolta Dati', visible: true, disabled: false },
        { buttonId: 'btnProtocollaForm', name: 'Protocolla', visible: true, disabled: false },
        { buttonId: 'btnRegistraId', name: 'Registra ID', visible: true, disabled: false },
        { buttonId: 'btnPrintOutput', name: 'Print Output', visible: true, disabled: false },
        { buttonId: 'btnComunicaTerzi', name: 'Comunica a terzi', visible: true, disabled: false },
        { buttonId: 'btnSelect', name: 'Select', visible: true, disabled: false },
        { buttonId: 'btnRadio', name: 'Radio button', visible: true, disabled: false },
        { buttonId: 'btnNote', name: 'Note', visible: true, disabled: false },
        { buttonId: 'btnInput', name: 'Input', visible: true, disabled: false },
        { buttonId: 'btnLabel', name: 'Label', visible: true, disabled: false }
    ];
    public static pulsantieraID = 'container-pulsantiera-checklist';

    public static routeDynamicPaths = [];
    public static tipoProcesso: any;

    // Modeler Constants-
    public static initialBpmnFilePath = '../../../../portale/assets/bpmn/diagramBpmnWithStartScript.bpmn';
    // public static initialBpmnFilePath = '../../../../portale/assets/bpmn/diagramWithoutStartEvent.bpmn';
    public static importModelerCamundaConfig = '../../../../portale/assets/bpmn/camunda.json';
    public static behaviorBpmnStartEvent = `execution.setVariable("url_root","http://${environment.urlroot_server_url}")
execution.setVariable("url_port","${CONST.portRoot_misb_service}")
execution.setVariable("endpoint_landingEndPointMisb","landingEndPointMisb")`;
    public static behaviorBpmnServiceTask = `def url_root = execution.getVariable("url_root")
def url_port= execution.getVariable("url_port")
def endpoint_landingEndPointMisb= execution.getVariable("endpoint_landingEndPointMisb")

def end_point = url_root+':'+
url_port+'/'+
endpoint_landingEndPointMisb+'/'

def baseUrl = new URL(end_point)
def queryString = 'processId='+	execution.processDefinitionId+
'&instanceId=' + execution.processInstanceId +
'&taskId='+ execution.activityId +
'&taskDocumentation='+ execution.activityName



def connection = baseUrl.openConnection()
connection.with {
doOutput = true
requestMethod = 'POST'
outputStream.withWriter { writer ->
    writer << queryString
}
// println content.text
def resVal = content.text
if(resVal.equals('fail')){
    throw new Exception("Eccezione generata in automatico "+execution.activityName )
}
}`;
    public static behaviorBpmnUserTask = `def url_root = task.execution.getVariable("url_root")
def url_port= task.execution.getVariable("url_port")
def endpoint_landingEndPointMisb= task.execution.getVariable("endpoint_landingEndPointMisb")

def end_point = url_root+':'+
url_port+'/'+
endpoint_landingEndPointMisb+'/'

def baseUrl = new URL(end_point)
def queryString = 'processId='+	task.execution.processDefinitionId+
'&instanceId=' + task.execution.processInstanceId +
'&taskId='+ task.id +
'&taskDocumentation='+ task.execution.activityName


def connection = baseUrl.openConnection()
connection.with {
doOutput = true
requestMethod = 'POST'
outputStream.withWriter { writer ->
    writer << queryString
}
// println content.text
def resVal = content.text
if(resVal.equals('fail')){
    throw new Exception("Eccezione generata in automatico "+task.execution.activityName )
}
}`;


    public static executionListenerForParticipant =
        `def url_root = execution.getVariable("url_root")
        def url_port = execution.getVariable("url_port")
        def endpoint_landingEndPointMisb = execution.getVariable("endpoint_landingEndPointMisb")

        def end_point = url_root + ':' +
            url_port + '/' +
            endpoint_landingEndPointMisb + '/'

        def baseUrl = new URL(end_point)
        def queryString = 'processId=' + execution.processDefinitionId +
            '&instanceId=' + execution.processInstanceId +
            '&taskId=' + execution.activityId +
            '&taskDocumentation=END_INSTANCE'

        def connection = baseUrl.openConnection()
        connection.with {
            doOutput = true
            requestMethod = 'POST'
            outputStream.withWriter {
        writer ->
        writer << queryString
        }
        // println content.text
        def resVal = content.text
        if (resVal.equals('fail')) {
            throw new Exception("Eccezione generata in automatico " + execution.activityName)
        }
          }`;
    
    public static wizardDefaultData = [{
        label: 'Configurazione Forms',
        type: 'parent',
        styleClass: 'p-parent',
        expanded: true,
        data: { switchValue: false, link: { name: 'Forms', url: '/form-assigner' } },
        children: [
            {
                label: 'Configurazione Pulsantiere',
                type: 'parent',
                styleClass: 'children',
                expanded: true,
                data: { switchValue: false, link: { name: 'Pulsantiere', url: '/button-modeler-admin' } },
            },
            {
                label: 'Inserimento  Checklist',
                expanded: true,
                type: 'parent',
                styleClass: 'children',
                data: { switchValue: false, link: { name: 'Checklist', url: '/manage-check-list' } },
            },
            {
                label: 'Inserimento Tariffario',
                expanded: true,
                type: 'parent',
                styleClass: 'children',
                data: { switchValue: false, link: { name: 'Tariffario', url: '/gestione-tariffario' } },

            }
        ]
    }];



    /**
     * getTimestamp
     */
    public static getTimestamp() {
        // return Math.floor(Date.now() / 10000)
        var timeStampInMs = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now();
        return timeStampInMs
    }


    public static readonly ADD_LINK = 'ADD_LINK';
    public static readonly REMOVE_LINK = 'REMOVE_LINK';
    public static formListByProcess = [];
    public static jsonChecklistOutput = {
        "a": "string",
        "azienda": {
            "attoNotarile": "string",
            "capSedeAzienda": "string",
            "cap_sede_legale": "string",
            "capitale_sociale": 0,
            "codice_fiscale": "string",
            "comune_sede_legale": "string",
            "creataDa": "string",
            "creatada": "string",
            "creatail": "2020-10-05T08:14:37.707Z",
            "dataAtto": "2020-10-05T08:14:37.707Z",
            "email": "string",
            "fax": {
                "countryCode": "string",
                "dialCode": "string",
                "e164Number": "string",
                "internationalNumber": "string",
                "nationalNumber": "string",
                "number": "string"
            },
            "forma_giuridica": {
                "forma_giuridica": "string",
                "postGresId": "string"
            },
            "id": "string",
            "id_forma_giuridica": "string",
            "notaio": "string",
            "numero_rea": "string",
            "paese": "string",
            "partita_iva": "string",
            "pec": "string",
            "postGresId": "string",
            "provincia_sede_legale": "string",
            "ragione_sociale": "string",
            "registrationDate": "2020-10-05T08:14:37.707Z",
            "sede_legale": "string",
            "telefono": {
                "countryCode": "string",
                "dialCode": "string",
                "e164Number": "string",
                "internationalNumber": "string",
                "nationalNumber": "string",
                "number": "string"
            }
        },
        "da": "string",
        "id": "string",
        "ruolo": {
            "id": "string",
            "ruolo": "string"
        },
        "stato": true,
        "utenteByEliminatoda": {},
        "utenteByIdUtente": {
            "almamater": "string",
            "camundaId": "string",
            "cellulare": {
                "countryCode": "string",
                "dialCode": "string",
                "e164Number": "string",
                "internationalNumber": "string",
                "nationalNumber": "string",
                "number": "string"
            },
            "codiceFiscale": "string",
            "codiceattivazione": "string",
            "cognome": "string",
            "comune": "string",
            "creatoil": "2020-10-05T08:14:37.707Z",
            "dataAttivazione": "2020-10-05T08:14:37.707Z",
            "dataNascita": "2020-10-05T08:14:37.707Z",
            "datarichiestaattivazione": "2020-10-05T08:14:37.707Z",
            "eliminatoDa": {},
            "eliminatoil": "2020-10-05T08:14:37.707Z",
            "email": "string",
            "fascicolo": {
                "aziendaFascicolo": [
                    {
                        "linkHateoas": "string",
                        "nome": "string",
                        "struttureFascicolo": [
                            {
                                "istanze": 0,
                                "linkHateoas": "string",
                                "nome": "string"
                            }
                        ]
                    }
                ]
            },
            "genere": "string",
            "id": "string",
            "id_ambito": {
                "ambito_territoriale": "string",
                "codice_catastale": "string",
                "denominazione": "string",
                "id": "string"
            },
            "indirizzo": "string",
            "laureatoil": "2020-10-05T08:14:37.707Z",
            "laureatoin": "string",
            "luogoNascita": "string",
            "nome": "string",
            "password": "string",
            "pec": "string",
            "postGresId": "string",
            "precedente": {},
            "provinciaNascita": "string",
            "provinciaResidenza": "string",
            "role": "string",
            "secondo": "string",
            "sostituitoDa": {},
            "specializzatoil": "2020-10-05T08:14:37.707Z",
            "specializzatoin": "string",
            "spidcode": "string",
            "stato": true,
            "telefono": {
                "countryCode": "string",
                "dialCode": "string",
                "e164Number": "string",
                "internationalNumber": "string",
                "nationalNumber": "string",
                "number": "string"
            },
            "username": "string"
        }
    };




}
