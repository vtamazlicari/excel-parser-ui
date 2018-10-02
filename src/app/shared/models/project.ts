export class Project {
  code: string;
  clientName: string;
  projectName: string;
  initialPhase: {
    comercialOffer: string;
    projectLaunchCheckList: string;
    kickOffMeetingWithClient: string;
    teamReestimation: string;
    teamEvaluatedByDT: string;
    smPoEvaluatedByDT: string;
    teamWithScrumTraining: string;
    guepardInvolvedAtProjectStart: string
  };
  score1: string;
  status1: string;
  ongoing: {
    team: {
      rightSkillLevel: string;
      teamMoodMeanVal: string;
      busFactor: string;
      teamOkWithClientsBusiness: string;
      teamOkWithProjectsTechnology: string
    };
    customer: {
      clientOpenForNew: string;
      noPressureOnTheProject: string;
      goodClientManagement: string
    };
    practices: {
      ci: string;
      techDebt: string;
      tdInSteer: boolean;
      codeReview: string;
      codingRules: string;
      testingProcessInPlace: string;
      refactoringPlanned: string
    }
  };
  score2: string;
  status2: string;
  global: string;
  updatedAt: string;
  isUpdate: boolean;
  perMonth: string;
  evolution: string;

  constructor(projectData: any[]) {
    this.code = projectData[0];
    this.clientName = projectData[1];
    this.projectName = projectData[2];
    this.initialPhase = {
      comercialOffer: projectData[3],
      projectLaunchCheckList: projectData[4],
      kickOffMeetingWithClient: projectData[5],
      teamReestimation: projectData[6],
      teamEvaluatedByDT: projectData[7],
      smPoEvaluatedByDT: projectData[8],
      teamWithScrumTraining: projectData[9],
      guepardInvolvedAtProjectStart: projectData[10],
    };
    this.score1 = projectData[11];
    this.status1 = projectData[12];
    this.ongoing = {
      team: {
        rightSkillLevel: projectData[13],
        teamMoodMeanVal: projectData[14],
        busFactor: projectData[15],
        teamOkWithClientsBusiness: projectData[16],
        teamOkWithProjectsTechnology: projectData[17]
      },
      customer: {
        clientOpenForNew: projectData[18],
        noPressureOnTheProject: projectData[19],
        goodClientManagement: projectData[20]
      },
      practices: {
        ci: projectData[21],
        techDebt: projectData[22],
        tdInSteer: projectData[23],
        codeReview: projectData[24],
        codingRules: projectData[25],
        testingProcessInPlace: projectData[26],
        refactoringPlanned: projectData[27]
      }
    };
    this.score2 = projectData[28];
    this.status2 = projectData[29];
    this.global = projectData[30];
    this.updatedAt = projectData[31];
    this.isUpdate = projectData[32];
    this.perMonth = projectData[33];
    this.evolution = projectData[34];
  }
}
