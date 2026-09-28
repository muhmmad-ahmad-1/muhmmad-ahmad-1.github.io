// Ordered as displayed. `context` is the one-line provenance (role, course, term,
// collaborators). For the description, an entry carries exactly one of:
//
//   abstract: the paper's own abstract, reproduced verbatim. Never paraphrase one
//              here, and never write one if the published text is not to hand.
//   body:     paragraphs written for the site, for work with no single paper
//              behind it (or whose abstract already appears on /publications/).
export default [
  {
    id: "quantx",
    title: "QuantX: Hardware-Aware Quantization for LLM and VLM Inference",
    context:
      "**10xEngineers**, AI Infrastructure Team · 2025 – Present · Lead Developer",
    // Ongoing work, broader than any single paper, so described rather than
    // abstracted. The arXiv abstract lives on the publications page.
    body: [
      "QuantX is a post-training quantization framework for large language and vision–language model inference. It inverts the conventional design order: rather than specifying a quantization scheme and requiring the inference stack to accommodate it, the framework takes the accelerator's implemented capabilities as its starting point (the supported element and scale datatypes, the available compute units, the instruction set architecture, and the structural constraints imposed by the runtime and compiler), and derives the algorithm within them.",
      "The format design space is itself treated as an optimisation variable rather than a fixed input, spanning element and scale datatypes, group size, and hierarchical scales, and covering standardised block formats alongside non-standard constructions. Algorithmically, the framework addresses mixed-precision allocation and codebook-based quantization across dense and mixture-of-experts models, optimising accuracy, memory footprint, and throughput jointly rather than minimising quantization error in isolation."
    ],
    links: [
      { label: "White paper (arXiv)", url: "https://arxiv.org/abs/2505.07531" },
      { label: "10xEngineers", url: "https://10xengineers.ai/quantx/" }
    ]
  },
  {
    id: "second-order-sam-fl",
    title:
      "Second-Order Sharpness-Aware Minimization for Heterogeneous Federated Learning",
    context:
      "**Senior Year Project**, BS Electrical Engineering, LUMS · 2024 – 2025 · Advised by Dr. Muhammad Tahir",
    abstract:
      "The goal of any machine learning system is to generalize effectively to unseen data. In federated learning (FL), this challenge is amplified by data privacy constraints and heterogeneous, non-IID client distributions, where data varies significantly across decentralized clients. To address this, we propose a second-order perturbation-based approach to Sharpness-Aware Minimization (SAM) tailored for federated learning. Our method leverages the maximum eigenvector and eigenvalue of the Hessian, computed via power iteration, alongside trace-based sharpness regularization using Hutchinson's method. This enables more precise control over local sharpness, promoting convergence to flatter minima that generalize better. We evaluate our method on vision classification tasks using CIFAR-10 and CIFAR-100 under synthetic heterogeneous (Dirichlet label-skew) splits. Our variants consistently outperform FedAvg and first-order FedSAM in test accuracy, by up to 5.77 points on CIFAR-10, and reach 50% accuracy up to 100 communication rounds earlier, while converging to measurably flatter minima. A key limitation in scaling second-order methods is their computational cost, which we measure at 3.5–12.5× that of FedAvg per round. To mitigate this, we propose sparse second-order perturbations interleaved with first-order updates, second-order switching in later training rounds, and a hybrid with server-side global sharpness minimization (FedGloSS); their empirical evaluation is left to future work.",
    links: [
      { label: "Report (PDF)", url: "/files/second_order_sam_federated_learning.pdf" },
      { label: "Code", url: "https://github.com/muhmmad-ahmad-1/fedsam_hessian" }
    ]
  },
  {
    id: "serverless-kd-fl",
    title:
      "Beyond Data-Free Distillation: Serverless Knowledge Distillation for Heterogeneous Federated Learning",
    context:
      "**Course Project**, CS-6304 Advanced Topics in Machine Learning, LUMS · Fall 2024",
    abstract:
      "Federated Learning (FL) struggles with non-IID client data, where Federated Averaging (FedAvg) often fails due to conflicting local updates and skewed distributions, because parameter averaging can disrupt the functional consistency between local and global models. Most existing approaches restrict the local update on the client, ignoring the performance drop caused by direct aggregation of the global model. We study knowledge distillation as a way to rectify, or replace, parameter averaging: after each training round, knowledge is distilled from the client models into the global model in a multi-teacher, single-student setup. We first extend data-free, noise-engineered knowledge distillation to FL, so that aggregation requires no data at all. We find that in this regime, pure data-free distillation fails to provide competitive performance and converges slowly, underperforming even FedAvg. We therefore introduce a decentralized, client-only (serverless) architecture in which a designated client acts as the student each round, distilling with its own local data, with teachers weighted by a reliability score based on entropy minimization and diversity maximization. On CIFAR-10 under severe label skew, the serverless variants reach 70.28% test accuracy against 43.57% for FedFTG and 43.26% for FedSAM, and adding noise inputs gives no clear further benefit. Despite these gains, training exhibits persistent oscillations; we analyze this convergence behaviour and suggest remedies.",
    links: [
      { label: "Report (PDF)", url: "/files/serverless_kd_federated_learning.pdf" },
      {
        label: "Code",
        url: "https://github.com/muhmmad-ahmad-1/ATML_G4/tree/Project"
      }
    ]
  },
  {
    id: "nile-basin",
    title:
      "Modeling Water Management Dynamics in the Nile River Basin: Integrating Hydrological and Socioeconomic Factors for Sustainable Policy Analysis",
    context: "**Course Project**, ENV-244, LUMS · Instructor Dr. Talha Manzoor",
    abstract:
      "The Nile River Basin, a lifeline for over 250 million people across 11 countries, has been a major source of conflict in North-Eastern Africa and the Horn of Africa, intensified by competing demands for hydropower, irrigation, and domestic use. Historically, Ethiopia has been disproportionately unfavored in water distribution treaties despite being the source of the Blue Nile. The recently built and filled Grand Ethiopian Renaissance Dam (GERD) marks a significant shift in regional hydropolitics, amplifying tensions over water rights and directly threatening downstream water security amid rising socioeconomic and political pressures in Egypt and Sudan. This study explores how these pressures shape sustainable water allocation policies once GERD has completed its filling stages. We employ a system dynamics approach to capture feedback-driven dynamics unavailable in static models, and develop two interlinked models: (1) a calibrated hydrological model representing real-world flow dynamics, including GERD's filling, and (2) a flight-simulator model that overlays domestic, agricultural, energy, and diplomatic pressures. The models simulate the operation of GERD, the Aswan High Dam, and the Jebel Aulia Reservoir under safe capacity constraints. Continuing pre-GERD policies during filling results in a decline in either the storage or the releases of downstream reservoirs; Jebel Aulia requires a minimum operational efficiency of about 0.85 to avoid overtopping; and while constant moderate pressures can be sustained, high or linearly growing pressures, driven by agricultural and domestic demand, lead to infeasible operations. These findings underscore the need for coordinated reservoir operations and pressure limits in shaping transboundary water agreements.",
    links: [
      { label: "Report (PDF)", url: "/files/nile_basin_water_management.pdf" }
    ]
  }
];
