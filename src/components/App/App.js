import React from 'react';
import { models, initialConfig } from '../../data';
// Styles
import './App.css';
// Components
import Menu from '../Menu';
import Footer from '../Footer';
import Settings from '../Settings';
import Summary from '../Summary';
import Preview from '../Preview';
import InteriorPreview from '../InteriorPreview';
import { Analytics } from "@vercel/analytics/react";

/*
 * TODO: Refactor App as a functional component
 *
 * Requirements:
 * - Compute total price using React hooks only when config or selectedModel change
 * - Create a custom hook to use localStorage to store the current step and config
 * - Switch from setState to the useLocalStorage hook
 * - Use function closures instead of this for callbacks and event handlers
 * - App logic and behavior should remain the same
 *
 */
class App extends React.Component {
  state = {
    currentStep: 0,
    config: initialConfig?.["vela"] ?? null,
  };

  get selectedModel() {
    return models.find((model) => model?.key === this.state.config?.model);
  }

  get steps() {
    return [
      {
        name: "car",
        settings: [
          {
            label: "Select car",
            type: "text",
            prop: "model",
            options: models.map((model) => ({
              value: model.key,
              label: model.name,
            })),
          },
          {
            label: "Select type",
            type: "text",
            prop: "car_type",
            options: this.selectedModel?.types ?? [],
            disclaimer_1:
              "All Vela modela are equipped with Driver Assitance features, all modern safety features and more. For more information about a testdrive please contact a local Procyon dealer.",
            disclaimer_2: "7 year warranty included in all Vela models.",
          },
        ],
      },
      {
        name: "exterior",
        settings: [
          {
            label: "Select color",
            type: "color",
            prop: "color",
            options: this.selectedModel?.colors ?? [],
          },
          {
            label: "Select wheels",
            type: "image",
            prop: "wheels",
            options: this.selectedModel?.wheels ?? [],
          },
          {
            label: "Select wheel color (preview coming soon)",
            type: "image",
            prop: "wheelcolor",
            options: this.selectedModel?.wheelcolor ?? [],
          },
          {
            label: "Select wheel size",
            type: "image",
            prop: "wheelsizes",
            options: this.selectedModel?.wheelsize ?? [],
          },
        ],
      },
      {
        name: "interior",
        settings: [
          {
            label: "Select premium interior",
            type: "text",
            prop: "interior_color",
            options: this.selectedModel?.interiorColors ?? [],
          },
          {
            label: "Select interior layout",
            type: "text",
            prop: "interior_layout",
            options: this.selectedModel?.interiorLayouts ?? [],
          },
        ],
      },
      {
        name: "summary",
      },
    ];
  }

  get totalPrice() {
    const basePrice =
      this.selectedModel?.types?.find(
        (type) => type.value === this.state.config?.car_type
      )?.price ?? 0;
    const colorPrice =
      this.selectedModel?.colors?.find(
        (color) => color.value === this.state.config?.color
      )?.price ?? 0;
    const wheelsPrice =
      this.selectedModel?.wheels?.find(
        (wheels) => wheels.value === this.state.config?.wheels
      )?.price ?? 0;
    const wheelsizePrice =
      this.selectedModel?.wheelsize?.find(
        (wheelsize) => wheelsize.value === this.state.config?.wheelsize
      )?.price ?? 0;
    const interiorColorPrice =
      this.selectedModel?.interiorColors?.find(
        (interiorColor) =>
          interiorColor.value === this.state.config?.interior_color
      )?.price ?? 0;
    const interiorLayoutPrice =
      this.selectedModel?.interiorLayouts?.find(
        (interiorLayout) =>
          interiorLayout.value === this.state.config?.interior_layout
      )?.price ?? 0;

    return (
      basePrice +
      colorPrice +
      wheelsPrice +
      interiorColorPrice +
      interiorLayoutPrice
    );
  }

  goToStep = (step) => {
    this.setState({ currentStep: step });
  };

  goToPrevStep = () => {
    this.setState((prevState) => {
      const newStep =
        prevState.currentStep > 0
          ? prevState.currentStep - 1
          : prevState.currentStep;
      return { currentStep: newStep };
    });
  };

  goToNextStep = () => {
    this.setState((prevState) => {
      const newStep =
        prevState.currentStep < this.steps.length - 1
          ? prevState.currentStep + 1
          : prevState.currentStep;
      return { currentStep: newStep };
    });
  };

  handleChangeModel = (model) => {
    this.setState({ config: initialConfig[model] });
  };

  handleOnSelectOption = (prop, value) => {
    if (prop === "model") {
      this.handleChangeModel(value);
    } else {
      this.setState((prevState) => ({
        config: {
          ...prevState.config,
          [prop]: value,
        },
      }));
    }
  };

  render() {
    const isFirstStep = this.state.currentStep === 0;
    const isLastStep = this.state.currentStep === this.steps.length - 1;

    return (
      <div className="app">
        <Analytics />

        <Menu
          items={this.steps.map((step) => step.name)}
          selectedItem={this.state.currentStep}
          onSelectItem={this.goToStep}
        />
        <main className="app-content">
          {this.steps[this.state.currentStep]?.name === "interior" ? (
            <InteriorPreview
              interior={this.selectedModel?.interiorColors.find(
                (interiorColor) =>
                  interiorColor.value === this.state.config.interior_color
              )}
            />
          ) : (
            <Preview
              config={this.state.config}
              models={models}
              showAllModels={isFirstStep}
              showSpecs={!isLastStep}
              onChangeModel={this.handleChangeModel}
            />
          )}

          {isLastStep ? (
            <Summary
              config={this.state.config}
              models={models}
              totalPrice={this.totalPrice}
            />
          ) : (
            <Settings
              config={this.state.config}
              settings={this.steps[this.state.currentStep].settings}
              onSelectOption={this.handleOnSelectOption}
            />
          )}
        </main>
        <Footer
          totalPrice={this.totalPrice}
          disablePrev={isFirstStep}
          disableNext={isLastStep}
          onClickPrev={this.goToPrevStep}
          onClickNext={this.goToNextStep}
        />
      </div>
    );
  }
};

export default App;
