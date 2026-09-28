// Newest first. `authors` is a list; the entry matching site.title is emphasised
// by the template, so write names exactly as published.
//
// Abstracts are reproduced verbatim from the paper: never paraphrased, and never
// written here if the published text is not to hand. Omit the field instead.
export default [
  {
    id: "hardware-aware-manycore",
    title:
      "Hardware-Aware Language Model Quantization For A Many-Core AI Inference Accelerator",
    authors: [
      "Muhammad Ahmad",
      "Khurram Usman Mazher",
      "Taimur Ahmad",
      "Nouman Amir",
      "Saad Bin Nasir"
    ],
    affiliation: "10xEngineers",
    venue: "ICLR 2027",
    year: 2027,
    status: "Under Review",
    links: [],
    abstract:
      "Edge accelerators for ML/AI workloads are designed around trade-offs between peak performance, memory capacity and bandwidth, power, and cost, with vendor economics driven by volume rather than per-unit margin. Because deployed silicon cannot be refreshed on the cadence of model releases, gains must increasingly come from the algorithmic side: pushing out the Pareto frontier of accuracy, memory footprint, and throughput within the constraints of hardware already in the field. Given the extensive work on post-training quantization, we choose it as the primary compression lever and treat it as a full inference-stack optimization problem, jointly optimizing accuracy, storage, and throughput rather than minimizing quantization error alone. We account for hardware features such as supported data formats, computational units, and the instruction set architecture, alongside structural constraints imposed by the runtime and compiler. Beyond the formats natively supported by the hardware, we treat the format design space itself (element and scale datatypes, group size, and hierarchical scales) as part of the optimization process, covering standardized block formats such as MXFP and NVFP as well as non-standard constructions. Algorithmically, we evaluate mixed-precision allocation and codebook-based quantization across dense and mixture-of-experts models from 4B to 35B parameters. We share with the wider community insights and trade-offs on what works well on paper and what actually improves the Pareto frontier across accuracy, memory footprint, and throughput for models deployed on edge silicon. We demonstrate our hardware-aware quantization methodology on a many-core edge accelerator with over a thousand RISC-V cores, achieving 34%, 67%, and 24% decode speedups over the llama.cpp K-quant of equal storage at 4.3x, 3.7x and 3.3x weight-memory reduction over BF16, within one point of its mean accuracy, on Qwen3.5-35B-A3B, Qwen3.5-4B, and Llama-3.1-8B respectively."
  },
  {
    id: "quantx",
    title:
      "QuantX: A Framework for Hardware-Aware Quantization of Generative AI Workloads",
    authors: [
      "Muhammad Ahmad",
      "Khurram Mazher",
      "Saqib Akram",
      "Ahmad Tameem",
      "Saad Bin Nasir"
    ],
    affiliation: "10xEngineers",
    venue: "arXiv Preprint",
    year: 2025,
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2505.07531" },
      { label: "PDF", url: "https://arxiv.org/pdf/2505.07531" }
    ],
    // Verbatim from arXiv:2505.07531v2.
    abstract:
      "We present QuantX: a tailored suite of recipes for LLM and VLM quantization. It is capable of quantizing down to 3-bit resolutions with minimal loss in performance. The quantization strategies in QuantX take into account hardware-specific constraints to achieve efficient dequantization during inference ensuring flexible trade-off between runtime speed, memory requirement and model accuracy. Our results demonstrate that QuantX achieves performance within 6% of the unquantized model for LlaVa-v1.6 quantized down to 3-bits for multiple end user tasks and outperforms recently published state-of-the-art quantization techniques. We further integrate one particular technique from QuantX into the popular llama.cpp framework and show its feasibility in terms of runtime compared to the mainstream quantization techniques from llama.cpp. Lastly, this manuscript provides insights into the LLM quantization process that motivated the range of recipes and options that are incorporated in QuantX."
  },
  {
    id: "soil-moisture-hite",
    title:
      "Exploring the Application of Machine Learning for Soil Moisture Forecasting over In-situ Soil Moisture Sensors Network",
    authors: ["Muhammad Ahmad", "Hamza Rafique", "Abubakr Muhammad"],
    venue:
      "IEEE International Conference on Horizons of Information Technology and Engineering (HITE)",
    year: 2024,
    links: [
      {
        label: "IEEE Xplore",
        url: "https://ieeexplore.ieee.org/document/10777226/"
      }
    ],
    // Verbatim from the published paper. The unit superscripts in "m³m⁻³" are
    // restored here; PDF text extraction flattens them to "m3m-3".
    abstract:
      "This research explores the application of machine learning (ML) for soil moisture data prediction within a vast soil moisture sensor network (WITSMS-Network) deployed by WIT across the Indus Basin. While the network provides real-time soil moisture data, sensor malfunctions can lead to data gaps and sub-optimal irrigation practices. To address this challenge, we propose an approach utilizing Long Short-Term Memory (LSTM) models to ingest and analyze continuous time series soil moisture data from the network alongside multi-modal data from land surface models. This end-to-end sequential ML pipeline allows for multi-step forecasting with variable history across diverse sites. The research serves two primary purposes: 1) to assess the viability of ML methods for soil moisture forecasting within WIT’s extensive IoT network, and 2) to evaluate the quality of short-term (few months), fragmented (with missing values) multi-site forecasts against benchmark dataset from COSMOS-UK consisting of continuous, long-term data from a single location. Our findings suggest the ML model has the capacity to learn the variations in soil moisture content, giving dynamic forecasting results of 1.47 m³m⁻³ ubRMSD for COSMOS-UK dataset and a high correlation of 98% for the WITSMS-Network dataset with static forecasting. Furthermore, the multi-site temporally sparse data offers limited forecasting accuracy compared to continuous single-site data."
  }
];
