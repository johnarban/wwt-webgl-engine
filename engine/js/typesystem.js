// Copyright 2023 the .NET Foundation
// Licensed under the MIT License

// Some small but helpful structures applied on top of the type system
// provided by ScriptSharp.

import { ss } from "./ss.js";

const registry = ss.createRegistry("wwtlib");
const enumTypes = {};


// Finish the creation and registration of a type that plugs into the
// ScriptSharp type system. The return value is the new type object.
//
// The `typeinfo` argument has a complex structure and comes from the code
// generated by ScriptSharp.
export function registerType(name, typeinfo) {
    // This function modifies the class object and returns it, but we can just
    // ignore the return value.
    ss.createType(name, typeinfo, registry);
}


// Register an enumeration with the type system.
//
// This is used to parse various enumerations from serialized formats.
export function registerEnum(name, type) {
    enumTypes[name] = type;
}


// The Enums helper "class". We could easily port this to a non-OO interface.

export function Enums() { }

Enums.parse = function (enumType, value) {
    if (value === "Default") {
        value = "DefaultV";
    }

    if (value === "0") {
        return 0;
    }

    var val = value.substr(0, 1).toLowerCase() + value.substr(1);
    return enumTypes[enumType][val];
};

Enums.toXml = function (enumType, value) {
    var x = "0";
    var p = Object.keys(enumTypes[enumType]);

    for (var i in p) {
        if (enumTypes[enumType][p[i]] == value) {
            x = p[i];
            break;
        }
    };

    var val = x;
    var enumString = val.substr(0, 1).toUpperCase() + val.substr(1);
    if (enumString === "DefaultV") {
        enumString = "Default";
    }

    return enumString;
};

const Enums$ = {};

registerType("Enums", [Enums, Enums$, null]);
