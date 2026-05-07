/**
 * @file SettingsForm.jsx
 * @description Форма налаштувань гри Connect Four.
 * Використовує react-hook-form з yup-валідацією для управління параметрами гри.
 * @module pages/StartPage/SettingsForm
 */

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useGameSettings } from "../../context/GameSettingsContext";
import "./SettingsForm.css";

/**
 * Схема валідації форми налаштувань.
 * @constant {yup.ObjectSchema} schema
 * @property {number} winLength - Кількість фішок для перемоги (3-6)
 * @property {number} maxWins - Кількість перемог для виграшу матчу (1-10)
 * @property {string} player1Color - Колір гравця 1
 * @property {string} player2Color - Колір гравця 2
 */
const schema = yup.object().shape({
    winLength: yup.number().min(3).max(6).required(),
    maxWins: yup.number().min(1).max(10).required(),
    player1Color: yup.string().required(),
    player2Color: yup.string().required(),
});

/**
 * Форма налаштувань гри.
 * Дозволяє змінювати параметри гри: кількість фішок для перемоги, кількість раундів,
 * та кольори гравців. Зміни зберігаються через {@link module:context/GameSettingsContext}.
 *
 * @function SettingsForm
 * @param {Object} props - Властивості компонента
 * @param {Function} props.onClose - Колбек для закриття модального вікна після збереження
 * @returns {React.ReactElement} Форма з полями налаштувань
 */
export default function SettingsForm({ onClose }) {
    const { settings, setSettings } = useGameSettings();

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
        defaultValues: settings,
    });

    /**
     * Обробник відправки форми. Зберігає нові налаштування та закриває вікно.
     * @param {Object} data - Валідовані дані форми
     */
    function onSubmit(data) {
        setSettings(data);
        onClose();
    }

    return (
        <form className="settings-form" onSubmit={handleSubmit(onSubmit)}>
            <h3>Налаштування гри</h3>

            <label>Перемога при N фішках</label>
            <input type="number" {...register("winLength")} />

            <label>Гра до N перемог</label>
            <input type="number" {...register("maxWins")} />

            <label>Колір гравця 1</label>
            <input type="color" {...register("player1Color")} />

            <label>Колір гравця 2</label>
            <input type="color" {...register("player2Color")} />

            <button type="submit">Зберегти</button>
        </form>
    );
}
